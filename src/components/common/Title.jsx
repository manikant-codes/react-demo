import React from "react";

function Title(props) {
  return (
    <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
      {props.title}
    </h2>
  );
}

export default Title;
