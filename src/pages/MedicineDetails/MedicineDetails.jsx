import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MedicineCard from "../../components/MedicineCard/MedicineCard";
import MedicineCart from "../../components/MedicineCard/MedicineCard";
const MedicineDetails = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/medicines.json`)
      .then((r) => r.json())
      .then((data) => {
        const normalized = (data || []).map((m) => ({
          ...m,
          forms: m.form || [],
          alternatives: m.alternatives || [],
        }));

        const foundMedicine = normalized.find(
          (m) => m.id.toLowerCase() === id.toLowerCase()
        );
        setMedicine(foundMedicine);
      })
      .catch(() => setMedicine(null));
  }, [id]);
  return (
    <>
      <section className="container-lg mt-5 min-vh-100">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8">
            <MedicineCard medicine={medicine} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicineDetails;
