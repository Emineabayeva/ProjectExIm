import React from "react";
import Header from "../../layout/admin/Header/Header";
import Footer from "../../layout/admin/Footer/Footer";
import { Outlet } from "react-router-dom";

const SiteRoot = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SiteRoot;
