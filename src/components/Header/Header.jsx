import React, { useState } from "react";
// import { SlChemistry } from "react-icons/sl";
import { GiMedicines } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
const headerNavLinks = [
  { path: "/", name: "Home" },
  { path: "/#categories", name: "Categories" },
  { path: "/#about", name: "About" },
  { path: "/#contact", name: "Contact" },
];
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  return (
    <header className=" position-sticky top-0 z-3 bg-light w-100 container-lg d-flex justify-content-between align-items-center  py-2 px-md-4">
      <div className="logo d-flex gap-3">
        <Link to="/" className="d-flex gap-3 align-items-center ">
          <GiMedicines className=" rounded-3 fs-1 bg-success text-light p-1" />
          <h1 className="text-black fw-bold">MidiFinder</h1>
          <GiHamburgerMenu
            className="d-md-none fs-1 text-black"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Link>
        <nav className={openMenu ? "mobile-nav open" : "mobile-nav"}>
          <ul className="mt-md-3 d-flex flex-column flex-md-row  gap-md-4 list-unstyled align-items-center">
            <li className="fs-3 w-100 text-center ">
              <Link
                to="/"
                className="text-success "
                onClick={() => {
                  setOpenMenu(false);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
            </li>

            <li className="fs-3 w-100 text-center">
              <a
                href="#categories"
                className="text-success"
                onClick={() => setOpenMenu(false)}
              >
                Categories
              </a>
            </li>

            <li className="fs-3 w-100 text-center">
              <a
                href="#about"
                className="text-success"
                onClick={() => setOpenMenu(false)}
              >
                About
              </a>
            </li>

            <li className="fs-3 w-100 text-center">
              <a
                href="#contact"
                className="text-success"
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="auth d-flex gap-4 fs-3 align-items-center    ">
        {!user ? (
          <>
            <Link to="/auth/login" className=" text-black">
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="btn btn-success fs-3 py-2 px-3 rounded-4 "
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile" className=" fs-2 text-success">
              <CgProfile />
            </Link>
            <Link to="/cart" className=" fs-2 text-success">
              <FaShoppingCart />
            </Link>
            <button
              className=" fs-2 btn btn-outline-success rounded-4 "
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                window.location.reload();
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
