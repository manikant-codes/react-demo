import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[128px_1fr]">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
