import React from "react";
import Title from "../common/Title";

function InfoRow(props) {
  if (props.imageFirst) {
    return (
      <div className="p-8">
        <Title title={props.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grow-[1] h-[400px] overflow-hidden">
            <img
              src={props.img}
              className="rounded-xl object-cover h-full w-full"
            />
          </div>
          <div className="">
            <p>{props.desc}</p>
            <button className="mt-4 bg-indigo-900 hover:bg-indigo-600 px-4 py-2 rounded-full text-white">
              Know More
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-8">
        <Title title={props.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <p>{props.desc}</p>
            <button className="mt-4 bg-indigo-900 hover:bg-indigo-600 px-4 py-2 rounded-full text-white">
              Know More
            </button>
          </div>
          <div className="grow-[1] h-[400px] overflow-hidden">
            <img
              src={props.img}
              className="rounded-xl object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InfoRow;
