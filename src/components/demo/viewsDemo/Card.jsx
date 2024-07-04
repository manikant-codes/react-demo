import React from "react";

function Card(props) {
  return (
    <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-300">
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src={props.place.img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{props.place.title}</h2>
        <p>{props.place.desc}</p>
      </div>
    </div>
  );
}

export default Card;
