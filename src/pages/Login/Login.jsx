import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import "./Login .css";
import { motion } from "framer-motion";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!userFound) {
      alert("You don't have an account. Please Sign Up first.");
      navigate("/auth/signup");
    } else {
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      navigate("/");
    }
  };

  return (
    <section
      className="login d-flex justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          duration: 0.5,
          delay: 0.5,
        }}
        className="box col-10   border rounded-3  text-center"
        style={{
          maxWidth: "500px",
          boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
          paddingBlock: "3rem",
          paddingInline: "3rem",
          width: "100%",
        }}
      >
        <h3 className="fw-bold "> Welcome Back </h3>
        <p className="text-center text-success fs-5 fw-semibold">
          Enter Your Credentials to access your account
        </p>
        <form className="d-flex flex-column gap-4 w-100" onSubmit={handleLogin}>
          <input
            className="p-3 fs-5 text-success rounded-4 border border-2 border-success w-100"
            type="email"
            placeholder="Enter Your Email"
            required
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="p-3   fs-5 text-success rounded-4 border border-2 border-success"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button
            type="submit"
            className=" btn btn-success p-3 fw-bold   fs-4  rounded-4 "
          >
            Log In
          </button>
        </form>
        <small className="mt-5 d-block fw-semibold fs-5">
          Dont't have an account?
          <Link to="/auth/signup" className="text-success">
            Sign Up
          </Link>
        </small>
      </motion.div>
    </section>
  );
};

export default Login;
