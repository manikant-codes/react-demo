import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import TeamRow from "../components/about/teamRow/TeamRow";
import HeroImage from "../components/home/HeroImage";
import InfoRow from "../components/home/InfoRow";

function About() {
  return (
    <>
      <HeroImage
        title="About Us"
        img="https://images.unsplash.com/photo-1549924327-093737b3bb46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, minima!"
      />
      <InfoRow
        title="Our Journey"
        img="https://images.unsplash.com/photo-1500087326943-dcabb70c026f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus ipsam nobis? Officiis inventore voluptatibus aperiam. Sunt, suscipit totam exercitationem eum laboriosam error eveniet maiores obcaecati ratione incidunt harum quod."
      />

      <TeamRow />
    </>
  );
}

export default About;
