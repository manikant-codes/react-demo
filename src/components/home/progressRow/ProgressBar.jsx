import React from "react";

function ProgressBar(props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p>{props.title}</p>
        <p>{props.percentage}%</p>
      </div>
      <div className="relative h-[10px] bg-indigo-100 rounded overflow-hidden">
        <div
          className={`absolute top-0 left-0 bottom-0 bg-indigo-500`}
          style={{
            width: props.percentage + "%",
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
