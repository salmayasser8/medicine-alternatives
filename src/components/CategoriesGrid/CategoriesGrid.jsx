import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LiaCapsulesSolid } from "react-icons/lia";
import { FiThermometer } from "react-icons/fi";
import { GiHealthCapsule } from "react-icons/gi";
import { PiCoffeeBold } from "react-icons/pi";
import { BiInjection } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import "./CategoriesGrid.css";
import { motion } from "framer-motion";
const icons = {
  FiThermometer: (
    <FiThermometer className="fs-1 mb-2 text-success text-center" />
  ),
  LiaCapsulesSolid: <LiaCapsulesSolid className="fs-1 mb-2 text-success" />,
  BiInjection: <BiInjection className="fs-1 mb-2 text-success" />,
  FaRegHeart: <FaRegHeart className="fs-1 mb-2 text-success" />,
  PiCoffeeBold: <PiCoffeeBold className="fs-1 mb-2 text-success" />,
  GiHealthCapsule: <GiHealthCapsule className="fs-1 mb-2 text-success" />,
};
export default function CategoriesGrid({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  return (
    <motion.section
      className=" border-bottom border-success category container-lg  "
      style={{ marginBlockEnd: "10rem", paddingBlockEnd: "8rem" }}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 10, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: 0.5,
      }}
    >
      <h2
        style={{ fontSize: "4rem", marginBottom: "5rem" }}
        className="fw-bold text-center "
      >
        Explore Medicine Categories
      </h2>

      <div className="row g-3 justify-content-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="col-10 col-sm-6 col-md-4 col-lg-2 d-flex"
          >
            {/* Each card links to its category page */}
            <Link
              to={`/category/${cat.slug}`}
              className="text-decoration-none w-100"
            >
              <div
                className="card d-flex flex-column align-items-center justify-content-center text-center gap-3 py-5 px-3 rounded-4 h-100"
                style={{
                  width: "100%",
                  cursor: "pointer",
                  boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
                  transition: "all 0.3s ease",
                }}
                // Hover effect: smooth shadow & scale
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {icons[cat.icon]}
                <h6 className="fs-5 text-success mb-0">{cat.name}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
