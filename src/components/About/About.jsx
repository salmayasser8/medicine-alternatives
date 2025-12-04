import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <motion.section
        className=" about container-lg text-center "
        style={{ paddingBlockEnd: "12rem" }}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 10, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 0.5,
        }}
      >
        <h2 className="fw-bold ">Why Choose MediFinder?</h2>
        <p className="text-success fs-3  w-75 mx-auto mt-5 fw-light ">
          MediFinder is dedicated to empowering your health journey with
          reliable information on natural and alternative treatments. Our
          platform provides carefully researched options, helping you make
          informed decisions for a balanced and healthier life.
        </p>
      </motion.section>
    </>
  );
};

export default About;
