import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const MainLayout = () => {
  //  const { pathname } = useLocation();

  // useEffect(() => {
  //   // Give the browser a tiny delay to render content before scrolling
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [pathname]);
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
