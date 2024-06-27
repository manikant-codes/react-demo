import React from "react";
import CounterCard from "./CounterCard";
import Title from "../../common/Title";

const data = [
  { id: 1, title: "Projects", count: 10 },
  { id: 2, title: "Clients", count: 50 },
  { id: 3, title: "Cities", count: 3 },
  { id: 4, title: "Talks", count: 7 },
];

function CounterRow() {
  return (
    <div className="p-8">
      <Title title="Our Journey" />
      <div className="grid grid-cols-4 gap-4">
        {data.map((value) => {
          return <CounterCard key={value.id} counter={value} />;
        })}
      </div>
    </div>
  );
}

export default CounterRow;
