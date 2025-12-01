import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
