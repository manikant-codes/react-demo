import React from "react";
import Footer from "../components/common/Footer";
import HeroImage from "../components/home/HeroImage";
import Navbar from "../components/common/Navbar";
import styles from "../styles/home/home.module.css";
import InfoRow from "../components/home/InfoRow";

function Home() {
  console.log("styles home", styles);
  return (
    <div>
      <Navbar />
      <HeroImage />
      <InfoRow
        title="About Us"
        img="https://images.unsplash.com/photo-1527067829737-402993088e6b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt
            accusamus, numquam obcaecati debitis aliquid veritatis deserunt,
            maxime vel temporibus beatae consectetur voluptatibus explicabo
            dolore! Aut sint quasi voluptatibus magnam."
        imageFirst
      />
      <InfoRow
        title="Our Story"
        img="https://images.unsplash.com/photo-1529512731903-186378156bad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt
            accusamus, numquam obcaecati debitis aliquid veritatis deserunt,
            maxime vel temporibus beatae consectetur voluptatibus explicabo
            dolore! Aut sint quasi voluptatibus magnam."
      />
      <Footer />
    </div>
  );
}

export default Home;
