import React from "react";
import Title from "../common/Title";
import ServicesRowCard from "./ServicesRowCard";

function ServicesRow() {
  return (
    <div className="p-8">
      <Title title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ServicesRowCard
          title="Lorem Ipsum"
          desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
          img="https://plus.unsplash.com/premium_photo-1661544508729-cc050142181e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ServicesRowCard
          title="Lorem Ipsum"
          desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
          img="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ServicesRowCard
          title="Lorem Ipsum"
          desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
          img="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ServicesRowCard
          title="Lorem Ipsum"
          desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
          img="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default ServicesRow;
