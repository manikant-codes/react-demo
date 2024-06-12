import React from "react";

function AboutRow() {
  return (
    <div className="bg-slate-200 p-8">
      <h2 className="text-4xl text-center mb-12 font-bold">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis deleniti ipsa eveniet aliquam velit, explicabo odio
            reiciendis distinctio, quidem culpa pariatur ipsam, commodi non
            dignissimos voluptatum? Aperiam veritatis earum magnam.
          </p>
          <button className="bg-violet-950 px-8 py-2 mt-4 rounded-full text-white hover:bg-violet-800">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutRow;
