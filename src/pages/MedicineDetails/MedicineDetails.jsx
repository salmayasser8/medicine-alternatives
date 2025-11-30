import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MedicineCard from "../../components/MedicineCard/MedicineCard";
import MedicineCart from "../../components/MedicineCard/MedicineCard";
const MedicineDetails = () => {
  const { id } = useParams(); // هياخد Id من الرابط
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    fetch("/data/medicines.json")
      .then((r) => r.json())
      .then((data) => {
        // Normalize each medicine to always have forms and alternatives arrays
        const normalized = (data || []).map((m) => ({
          ...m,
          forms: m.form || [], // Ensure forms is an array
          alternatives: m.alternatives || [], // Ensure alternatives is an array
        }));

        // Find the specific medicine by ID
        const foundMedicine = normalized.find(
          (m) => m.id.toLowerCase() === id.toLowerCase()
        );
        setMedicine(foundMedicine);
      })
      .catch(() => setMedicine(null));
  }, [id]);

  // if (!medicine) {
  //   return (
  //     <div className="alert alert-info text-center">Medicine not found.</div>
  //   );
  // }

  return (
    <>
      <section className="container-lg mt-5">
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
