import React, { useState, useEffect } from "react";
import "./Home.css";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CategoriesGrid from "../../components/CategoriesGrid/CategoriesGrid";
import categories from "../../data/categories.json";
// import { InputGroup, FormControl, Button } from "react-bootstrap";
import medicineImg from "../../assets/medicineImg.jpg";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import MedicineDetails from "../MedicineDetails/MedicineDetails";
import { motion } from "framer-motion";
const Home = () => {
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadMedicines = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.BASE_URL}data/medicines.json`
        );
        const data = await res.json();
        setMedicines(data || []);
      } catch (error) {
        console.error("Error loading medicines:", error);
        setMedicines([]);
      }
    };

    loadMedicines();
  }, []);
  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const found = medicines.find(
      (m) =>
        m.name.toLowerCase() === q || (m.brand && m.brand.toLowerCase() === q)
    );

    if (found) {
      navigate(`/medicine/${found.id}`);
    } else {
      alert(" Medicine not found");
    }
  };

  // useEffect(() => {
  //   const t = setTimeout(() => {
  //   }, 180);
  //   return () => clearTimeout(t);
  // }, [query, medicines]);

  return (
    <>
      <section
        className=" home  container-lg  "
        style={{ marginTop: "10rem", paddingBlockEnd: "15rem" }}
      >
        <motion.div
          className="row  align-items-center "
          animate={{ y: 10, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className=" col-12 col-md-6">
            <h2 className=" fw-bold mb-5 ">
              Find Medicine Alternatives Easily
            </h2>
            <p className="fs-3 text-success fw-light  ">
              Explore medicine alternatives and learn about their active
              ingredients to make informed health decisions
            </p>
            <form className="  mt-md-3" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group rounded-pill  border border-success px-2 d-flex align-items-center">
                <IoIosSearch className="fs-3" />
                <input
                  className="form-control border-0 p-3 fs-4 shadow-none"
                  required
                  type="text"
                  placeholder="Enter Medicine Name"
                  aria-label="Search medicine"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="btn btn-success rounded-pill ms-1  px-4 fs-4"
                  type="submit"
                  aria-label="Search"
                  onClick={handleSearch}
                  /* results updated via query effect */
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 d-sm-block ">
            <img
              src={medicineImg}
              alt="medicine"
              className="img-fluid rounded-4 "
            />
          </div>
        </motion.div>
      </section>
      <section id="categories">
        <CategoriesGrid categories={categories} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
