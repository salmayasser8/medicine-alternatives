import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const MainLayout = () => {
  
  return (

    <div className="main-layout">
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
