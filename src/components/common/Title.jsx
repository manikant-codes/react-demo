import React from "react";

function Title(props) {
  return (
    <div>
      <h2 className="text-4xl text-center mb-8 text-indigo-500 font-bold">
        {props.title}
      </h2>
    </div>
  );
}

export default Title;
