import React from "react";
import Footer from "../components/common/Footer";
import HeroImage from "../components/home/HeroImage";
import Navbar from "../components/common/Navbar";
import InfoRow from "../components/home/InfoRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ProgressRow from "../components/home/progressRow/ProgressRow";
import ServicesRowMap from "../components/home/servicesRow/ServicesRowMap";
import ProgressRowMap from "../components/home/progressRow/ProgressRowMap";
import PricingRowMap from "../components/home/pricingRow/PricingRowMap";

function Home() {
  const showOurStory = true;
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
      {showOurStory && (
        <InfoRow
          title="Our Story"
          img="https://images.unsplash.com/photo-1529512731903-186378156bad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt
            accusamus, numquam obcaecati debitis aliquid veritatis deserunt,
            maxime vel temporibus beatae consectetur voluptatibus explicabo
            dolore! Aut sint quasi voluptatibus magnam."
        />
      )}
      <ProgressRowMap />
      <ServicesRowMap />
      <PricingRowMap />
      <Footer />
    </div>
  );
}

export default Home;
