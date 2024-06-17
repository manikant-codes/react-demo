import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ServiceCard(props) {
  return (
    <div className="bg-indigo-100 p-4 rounded-lg">
      <div className="mb-2">
        {/* <img src={props.img} alt="" className="rounded-lg" /> */}
        <FontAwesomeIcon
          className="text-4xl text-indigo-500"
          icon={props.icon}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default ServiceCard;
