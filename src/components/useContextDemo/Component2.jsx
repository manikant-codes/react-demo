import React, { useContext } from "react";
import Component3 from "./Component3";
import { userContext } from "../../pages/UseContextDemo";

function Component2() {
  const value = useContext(userContext);
  return (
    <div className="p-8 bg-indigo-200">
      <p>From 2 {value}</p>
      <Component3 />
    </div>
  );
}

export default Component2;
