import React from "react";
import Child from "./Child";

function Parent() {
  function getData(data) {
    console.log(data);
  }

  return (
    <div>
      <Child getData={getData} />
    </div>
  );
}

export default Parent;
