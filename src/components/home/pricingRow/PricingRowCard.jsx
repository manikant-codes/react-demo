import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PricingRowCard(props) {
  console.log("props", props);
  return (
    <div className={`bg-indigo-100 p-8 rounded flex flex-col gap-6`}>
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
      <ul className="flex flex-col gap-2">
        <li
          className={`flex items-center gap-2  ${
            props.one ? "" : "line-through"
          }`}
        >
          {/* <FontAwesomeIcon icon={props.features.one ? faCheck : faXmark} /> */}
          <FontAwesomeIcon
            icon={props.one ? faCheck : faXmark}
            className={`${props.one ? "text-green-600" : "text-red-600"}`}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2  ${
            props.two ? "" : "line-through"
          }`}
        >
          {/* <FontAwesomeIcon icon={props.features.two ? faCheck : faXmark} /> */}
          <FontAwesomeIcon
            icon={props.two ? faCheck : faXmark}
            className={`${props.two ? "text-green-600" : "text-red-600"}`}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2  ${
            props.three ? "" : "line-through"
          }`}
        >
          {/* <FontAwesomeIcon icon={props.features.three ? faCheck : faXmark} /> */}
          <FontAwesomeIcon
            icon={props.three ? faCheck : faXmark}
            className={`${props.three ? "text-green-600" : "text-red-600"}`}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2  ${
            props.four ? "" : "line-through"
          }`}
        >
          {/* <FontAwesomeIcon icon={props.features.four ? faCheck : faXmark} /> */}
          <FontAwesomeIcon
            icon={props.four ? faCheck : faXmark}
            className={`${props.four ? "text-green-600" : "text-red-600"}`}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
        <li
          className={`flex items-center gap-2  ${
            props.five ? "" : "line-through"
          }`}
        >
          {/* <FontAwesomeIcon icon={props.features.five ? faCheck : faXmark} /> */}
          <FontAwesomeIcon
            icon={props.five ? faCheck : faXmark}
            className={`${props.five ? "text-green-600" : "text-red-600"}`}
          />
          <p>Quam adipiscing vitae proin</p>
        </li>
      </ul>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 w-fit">
        Know More
      </button>
    </div>
  );
}

export default PricingRowCard;
