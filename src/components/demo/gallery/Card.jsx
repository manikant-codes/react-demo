import React from "react";

function Card(props) {
  return (
    <div className="bg-slate-200 max-w-[400px] rounded-lg border border-slate-300">
      <div className="h-[250px] overflow-hidden">
        <img
          src={props.value.img}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{props.value.name}</h3>
        <p>{props.value.desc}</p>
      </div>
    </div>
  );
}

export default Card;
