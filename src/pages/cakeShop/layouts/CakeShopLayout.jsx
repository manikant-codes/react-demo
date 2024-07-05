import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function CakeShopLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default CakeShopLayout;
