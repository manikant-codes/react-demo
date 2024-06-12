import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import PostsList from "../components/home/PostsList";

function Home() {
  return (
    <div>
      <Navbar />
      <PostsList />
      <Footer />
    </div>
  );
}

export default Home;
