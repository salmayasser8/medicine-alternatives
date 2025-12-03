import React from "react";
import { Outlet } from "react-router-dom";
// import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const AuthLayout = () => {
  return (
    <div className="auth-layout">
      {/* <ScrollToTop /> */}

      <Outlet />
    </div>
  );
};

export default AuthLayout;
