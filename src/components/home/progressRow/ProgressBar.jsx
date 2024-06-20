import React from "react";

function ProgressBar(props) {
  return (
    <div>
      <div className="flex justify-between">
        <p>{props.title}</p>
        <p>{props.percentage}%</p>
      </div>
      <div className="h-[10px] bg-slate-200 rounded-lg relative overflow-hidden">
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
