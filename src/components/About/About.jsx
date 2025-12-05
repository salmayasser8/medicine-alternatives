import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <section
        className="about container-lg text-center "
        style={{ paddingBlockEnd: "12rem" }}
      >
        <h2 className="fw-bold ">Why Choose MediFinder?</h2>
        <p className={`text-success fs-3  w-75 mx-auto mt-5 fw-light ${styles.aboutP}`} >
          MediFinder is dedicated to empowering your health journey with
          reliable information on natural and alternative treatments. Our
          platform provides carefully researched options, helping you make
          informed decisions for a balanced and healthier life.
        </p>
      </section>
    </>
  );
};

export default About;
