import React from "react";
import CountUp from "react-countup";

function CounterCard(props) {
  return (
    <div className="bg-indigo-100 p-4 flex flex-col gap-2 rounded-xl text-center">
      <h3 className="text-4xl text-indigo-700 font-bold">
        <CountUp end={props.counter.count} />+
      </h3>
      <p className="text-xl">{props.counter.title}</p>
    </div>
  );
}

export default CounterCard;
