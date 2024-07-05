import React from "react";

function PageTitle(props) {
  return (
    <h2 className="text-center text-3xl font-semibold text-indigo-700">
      {props.title}
    </h2>
  );
}

export default PageTitle;
