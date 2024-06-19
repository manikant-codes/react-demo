import React from "react";

// ::after {
//   content: "";
//   position: absolute;
//   display: block;
//   width: 60px;
//   height: 3px;
//   background: var(--accent-color);
//   left: 0;
//   right: 0;
//   bottom: 0;
//   margin: auto;
// }

function Title(props) {
  return (
    <h2 className="relative text-4xl font-bold text-center text-indigo-600 mb-[64px] after:content-[''] after:absolute after:block after:w-[60px] after:h-[3px] after:bg-indigo-500 after:left-0 after:right-0  after:m-auto before:content-[''] before:absolute before:block before:w-[200px] before:h-[1px] after:bottom-[-16px] before:bottom-[-15px] before:bg-slate-500 before:left-0 before:right-0 before:m-auto">
      {props.title}
    </h2>
  );
}

export default Title;
