import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import categories from "../../data/categories.json";
import MedicineCard from "../../components/MedicineCard/MedicineCard";
import { useWindowSize } from "react-use";
const Category = () => {
  const { slug } = useParams(); // هياخد slug من الرابط
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/medicines.json`)
      .then((r) => r.json())
      .then((data) => {
        // Normalize each medicine to always have forms and alternatives arrays
        const normalized = (data || []).map((m) => ({
          ...m,
          forms: m.form || [], // Ensure forms is an array
          alternatives: m.alternatives || [], // Ensure alternatives is an array
        }));
        setMedicines(normalized);
      })
      .catch(() => setMedicines([]));
  }, []);
  const filteredMedicines = medicines.filter((m) => m.category === slug);
  const categoryName = categories.find((c) => c.slug === slug)?.name || "";
  const { width } = useWindowSize();
  const isMobileView = width <= 768;
  return (
    <>
      <section className="container-lg mt-5">
        <h2 className="fw-bold mb-5  ">{categoryName} Medicines</h2>
        {filteredMedicines.length > 0 ? (
          <div className="row g-md-3">
            {filteredMedicines.map((medicine) => (
              <div
                key={medicine.id}
                className="col-10 col-md-6 col-lg-4 "
                style={isMobileView ? { margin: "auto" } : {}}
              >
                <div
                  className="card h-100 p-4 "
                  style={{
                    boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
                    cursor: "pointer",
                  }}
                >
                  <h3 className="fw-bold mb-1 fs-3">{medicine.name}</h3>
                  <small className="text-success fs-4 d-block ">
                    {medicine.activeIngredient} • {medicine.strength}
                  </small>
                  <p className="text-success fs-4  mb-2 fw-semibold">
                    {medicine.cat_description}
                  </p>
                  <Link
                    to={`/medicine/${medicine.id}`}
                    className=" badge py-2 text-light bg-success fw-semibold fs-5 w-50  text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-success text-center fs-4 fw-semibold">
            No medicines found in this category yet.
          </div>
        )}
      </section>
    </>
  );
};

export default Category;
