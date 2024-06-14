import React from "react";
import HeroImage from "../components/home/HeroImage";
import Footer from "../components/common/Footer";
// import "../styles/home/home.css";
import styles from "../styles/home/home.module.css";
import InfoRow from "../components/home/InfoRow";
import Navbar from "../components/common/Navbar";

function Home() {
  console.log("styles home", styles);
  return (
    <div>
      <Navbar />
      <HeroImage />
      <InfoRow
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae quisquam quae pariatur reprehenderit laudantium itaque, maiores, magni modi dolor, libero tempore aliquid velit beatae exercitationem nam consequuntur ipsam architecto."
        img="https://images.unsplash.com/photo-1718174405504-6c65225786de?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageFirst={false}
      />
      <InfoRow
        img="https://images.unsplash.com/photo-1718143047302-56837e2bf688?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Story"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae quisquam quae pariatur reprehenderit laudantium itaque, maiores, magni modi dolor, libero tempore aliquid velit beatae exercitationem nam consequuntur ipsam architecto."
        imageFirst
      />
      <InfoRow
        img="https://images.unsplash.com/photo-1718143110625-c83b4d3726a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Journey"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae quisquam quae pariatur reprehenderit laudantium itaque, maiores, magni modi dolor, libero tempore aliquid velit beatae exercitationem nam consequuntur ipsam architecto."
        imageFirst={false}
      />
      <Footer />
    </div>
  );
}

export default Home;
