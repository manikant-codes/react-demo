import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PricingRowCard(props) {
  return (
    <div
      className={`bg-indigo-100 p-8 rounded flex flex-col gap-6 ${
        props.active ? "border-t-4 border-indigo-600" : ""
      }`}
    >
      <h3 className="text-xl font-bold text-indigo-500">{props.title}</h3>
      <div>
        <p>
          <sup className="text-3xl text-indigo-700">$</sup>
          <span className="text-5xl text-indigo-700 font-bold">
            {props.price}
          </span>
          <span>/month</span>
        </p>
      </div>
      <ul>
        <li
          className={`flex gap-2 items-center ${
            props.features[1] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            icon={props.features[1] ? faCheck : faXmark}
            className={`${
              props.features[1] ? "text-green-600" : "text-red-600"
            }`}
          />
          Quam adipiscing vitae proin
        </li>
        <li
          className={`flex gap-2 items-center ${
            props.features[2] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            icon={props.features[2] ? faCheck : faXmark}
            className={`${
              props.features[2] ? "text-green-600" : "text-red-600"
            }`}
          />
          Nec feugiat nisl pretium
        </li>
        <li
          className={`flex gap-2 items-center ${
            props.features[3] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            icon={props.features[3] ? faCheck : faXmark}
            className={`${
              props.features[3] ? "text-green-600" : "text-red-600"
            }`}
          />
          Nulla at volutpat diam uteera
        </li>
        <li
          className={`flex gap-2 items-center ${
            props.features[4] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            icon={props.features[4] ? faCheck : faXmark}
            className={`${
              props.features[4] ? "text-green-600" : "text-red-600"
            }`}
          />
          Pharetra massa massa ultricies
        </li>
        <li
          className={`flex gap-2 items-center ${
            props.features[5] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            icon={props.features[5] ? faCheck : faXmark}
            className={`${
              props.features[5] ? "text-green-600" : "text-red-600"
            }`}
          />
          Massa ultricies mi quis hendrerit
        </li>
      </ul>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 w-fit">
        Know More
      </button>
    </div>
  );
}

export default PricingRowCard;
