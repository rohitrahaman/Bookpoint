import React from "react";
import { Outlet } from "react-router";
import Header from "../Fronend/home/Header";
import Footer from "../Fronend/home/Footer";

function FrontendLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default FrontendLayout;
