import React from "react";
import HeroImage from "../components/home/HeroImage";
import Footer from "../components/common/Footer";
// import "../styles/home/home.css";
import styles from "../styles/home/home.module.css";

function Home() {
  console.log("styles home", styles);
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <HeroImage />
      <Footer />
    </div>
  );
}

export default Home;
