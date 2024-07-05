import React from "react";
import TeamRow from "../components/about/teamRow/TeamRow";
import InfoRow from "../components/home/InfoRow";
import Carousel from "../components/home/carousel/Carousel";

const slidesData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1461229813543-5c214846bb3f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1606454099242-af49f9be9b36?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1520549421221-3e77d246063d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
];

function About() {
  return (
    <>
      <Carousel
        title="About Us"
        slidesData={slidesData}
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, minima!"
      />
      <InfoRow
        title="Our Journey"
        img="https://images.unsplash.com/photo-1500087326943-dcabb70c026f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus ipsam nobis? Officiis inventore voluptatibus aperiam. Sunt, suscipit totam exercitationem eum laboriosam error eveniet maiores obcaecati ratione incidunt harum quod."
      />
      {/* <TeamRow /> */}
    </>
  );
}

export default About;
