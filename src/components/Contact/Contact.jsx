import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <motion.section
        className="contact container-lg w-100  "
        style={{ paddingBlockEnd: "5rem" }}
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
        <div
          className="row  d-flex justify-content-center "
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 10, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 80,
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className="col-3 d-flex flex-column align-items-center ">
            <ul className="list-unstyled fs-4  ">
              <li className="fw-bold mb-2">Explore</li>
              <li className="text-success">
                <a href="" className="text-success">
                  Home
                </a>
              </li>
              <li className="text-success">
                <a href="" className="text-success">
                  Shop
                </a>
              </li>
              <li className="text-success">
                <a className="text-success" href="">
                  Our Story
                </a>
              </li>
              <li>
                <a className="text-success" href="">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6  mx-auto d-flex flex-column align-items-center gap-3 ">
            <h4 className="fw-bold mb-2">Get in Touch</h4>
            <form className="d-flex flex-column gap-3 w-75">
              <input
                type="text"
                placeholder="Full Name"
                className=" p-2  rounded-2 border border-2 border-success fs-5  "
              ></input>
              <input
                type="email"
                placeholder="Email Address"
                className=" p-2 rounded-2 border border-2 border-success fs-5  "
              ></input>
              <textarea
                placeholder="Your Message"
                className=" p-2 rounded-2 border border-2 border-success fs-5 "
                style={{
                  height: "8rem",
                }}
              ></textarea>
              <button
                type="submit"
                className="bg-success text-light fs-5 p-3 border-0 rounded-2"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="col-3 d-flex flex-column align-items-center ">
            <ul className="list-unstyled fs-4  ">
              <li className="fw-bold mb-2">Support</li>
              <li>
                <a href="" className="text-success">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="" className="text-success">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="" className="text-success">
                  Terma Of Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
