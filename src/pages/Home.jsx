import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import CompaniesLogos from "../components/home/CompaniesLogos";
import HeroImage from "../components/home/HeroImage";
import AboutRow from "../components/home/AboutRow";
import StoryRow from "../components/home/StoryRow";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <CompaniesLogos />
      <AboutRow />
      <StoryRow />

      <Footer />
    </div>
  );
}

export default Home;
