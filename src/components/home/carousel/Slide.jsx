import React from "react";

function Slide(props) {
  return (
    <div className="h-[calc(100vh-88px)] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-950 opacity-50 z-[100]" />
      <img src={props.img} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default Slide;
