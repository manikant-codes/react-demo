import React from "react";

function StoryRow() {
  return (
    <div className="grid ">
      <h2>About Us</h2>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          laboriosam maxime eos neque facilis! Tenetur autem eveniet iusto
          doloremque sunt veritatis voluptates facilis dolores. Perspiciatis
          earum repellat ut nam facilis.
        </p>
        <botton>Konw</botton>
      </div>

      <img
        src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-lg"
      />
    </div>
  );
}

export default StoryRow;
