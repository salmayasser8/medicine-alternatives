import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || [];
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <motion.section
        className="container-lg mt-5 d-flex flex-column gap-5  align-items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <div
          className="card col-12 col-md-10 p-4 rounded-3"
          style={{
            boxShadow: "0 0 4px 3px rgba(25, 135, 84, 0.4)",
          }}
        >
          <div className="info">
            <h3 className="fw-bold fs-1">Personal Information</h3>
            <p className="fs-4 text-success">
              Manage your pesonal details and change your password here
            </p>
            <form className="d-flex flex-column flex-md-row gap-5 pb-5 border-bottom border-success">
              <div className=" w-75 d-flex flex-column gap-2 ">
                <label htmlFor="name" className="fw-semibold fs-4">
                  Full Name
                </label>
                <input
                  className=" border  border-success rounded-4 p-2 fs-4"
                  style={{ cursor: "pointer" }}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  readOnly
                ></input>
              </div>
              <div className="w-75 d-flex flex-column gap-2 ">
                <label htmlFor="name" className="fw-semibold fs-4">
                  Email Addresse
                </label>
                <input
                  className=" border  border-success rounded-4 p-2 fs-4 "
                  type="email"
                  value={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly
                ></input>
              </div>
            </form>
            <h3 className="fw-bold fs-1 mt-3">Change Password</h3>
            <p className="fs-4 text-success">
              For security,please choose a strong password
            </p>
            <form className="d-flex flex-column flex-md-row gap-5  ">
              <div className=" w-75 d-flex flex-column gap-2 ">
                <label htmlFor="pass" className="fw-semibold fs-4">
                  New Password
                </label>
                <input
                  id="pass"
                  className=" border  border-success rounded-4 p-2 fs-4"
                  style={{ cursor: "pointer" }}
                  type="password"
                  placeholder="Enter Your Password"
                  autoFocus
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="w-75 d-flex flex-column gap-2 ">
                <label htmlFor="confirm" className="fw-semibold fs-4">
                  Confirm New Password
                </label>
                <input
                  id="confirm"
                  className=" border  border-success rounded-4 p-2 fs-4 "
                  type="password"
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </form>
            <div className="mt-5 d-flex gap-3 justify-content-end">
              <button
                type="button"
                className="btn btn-outline-success fs-4"
                onClick={() => {
                  setNewPassword("");
                  setConfirmPassword("");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success fs-4"
                onClick={() => {
                  // Validate: check if inputs are empty
                  if (!newPassword.trim() || !confirmPassword.trim()) {
                    alert("Please enter new password");
                    return;
                  }
                  // Validate: check if passwords match
                  if (newPassword !== confirmPassword) {
                    alert("Passwords don't match");
                    return;
                  }
                  // Save to localStorage
                  localStorage.setItem("savedPassword", newPassword);
                  alert("Password saved successfully");
                  // Clear fields after successful save
                  setNewPassword("");
                  setConfirmPassword("");
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <OrderHistory />
      </motion.section>
    </>
  );
};

export default Profile;
