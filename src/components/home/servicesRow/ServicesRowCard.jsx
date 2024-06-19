import React from "react";

function ServicesRowCard(props) {
  return (
    <div>
      <div>
        <img src={props.img} alt="" className="rounded" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default ServicesRowCard;
