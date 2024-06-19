import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PricingCard(props) {
  return (
    <div
      className={`bg-indigo-100 p-4 rounded-lg flex flex-col gap-4 ${
        props.active ? "border-t-4 border-indigo-500" : ""
      }`}
    >
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p className="text-4xl font-bold mb-4">
        <sup className="text-indigo-500">$</sup>
        <span className="text-indigo-500">{props.price}</span>
        <span className="text-base font-normal">/ month</span>
      </p>
      <ul className="flex flex-col gap-2 mb-4">
        <li
          className={`flex items-center gap-2 ${
            props.features[1] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            className={`${
              props.features[1] ? "text-green-600" : "text-red-600"
            }`}
            icon={props.features[1] ? faCheck : faXmark}
          />

          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2 ${
            props.features[2] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            className={`${
              props.features[2] ? "text-green-600" : "text-red-600"
            }`}
            icon={props.features[2] ? faCheck : faXmark}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2 ${
            props.features[3] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            className={`${
              props.features[3] ? "text-green-600" : "text-red-600"
            }`}
            icon={props.features[3] ? faCheck : faXmark}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2 ${
            props.features[4] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            className={`${
              props.features[4] ? "text-green-600" : "text-red-600"
            }`}
            icon={props.features[4] ? faCheck : faXmark}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2 ${
            props.features[5] ? "" : "line-through"
          }`}
        >
          <FontAwesomeIcon
            className={`${
              props.features[5] ? "text-green-600" : "text-red-600"
            }`}
            icon={props.features[5] ? faCheck : faXmark}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
      </ul>

      <button className="bg-indigo-500 text-white px-4 py-2 rounded-full w-fit hover:bg-indigo-800">
        Know More
      </button>
    </div>
  );
}

export default PricingCard;
