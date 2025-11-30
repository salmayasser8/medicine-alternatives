import React from "react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className=" border-top border-success d-flex justify-content-between align-items-center container-lg py-3">
        <p className="text-success fw-semibold fs-4 ">
          © 2025 MidiFinder. All rights reserved
        </p>
        <ul className="list-unstyled d-flex gap-3 fs-3">
          <li>
            <a href="" className="text-success">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="" className="text-success">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/201270862682"
              target="blank"
              className="text-success"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
