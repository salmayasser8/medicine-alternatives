import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSign = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find((user) => user.email === email);

    if (userFound) {
      alert("You already have an account. Please Log In");
      navigate("/auth/login");
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully!");
      navigate("/auth/login");
    }
  };

  return (
    <>
      <section className="sign d-flex justify-content-center min-vh-100 align-items-center  ">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 0.5,
            delay: 0.5,
          }}
          className=" box col-10  border rounded-3 text-center p-5"
          style={{
            maxWidth: "500px",
            boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
          }}
        >
          <h3 className="fw-bold fs-1">Create Your Account </h3>
          <p className="text-center text-success fs-5 fw-semibold">
            Join MidiFinder to discover new medicines and better alternatives
          </p>
          <form
            className="d-flex flex-column gap-4 w-100"
            onSubmit={handleSign}
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="p-3 fs-5 text-success rounded-4 border border-2 border-success"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="p-3 fs-5 text-success rounded-4 border border-2 border-success"
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
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="p-3 fs-5 text-success rounded-4 border border-2 border-success"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className=" btn btn-success p-3 fw-bold   fs-4  rounded-4 "
            >
              Sign Up
            </button>
          </form>
          <small className="mt-5 d-block fw-semibold fs-5">
            Already have an account?
            <Link to="/auth/login" className="text-success">
              Log In
            </Link>
          </small>
        </motion.div>
      </section>
    </>
  );
};

export default SignUp;
