import React, { useContext } from "react";
import Component2 from "./Component2";
import { userContext } from "../../pages/UseContextDemo";

function Component1() {
  const value = useContext(userContext);
  return (
    <div className="p-8 bg-indigo-100">
      <p>From 1 {value}</p>
      <Component2 />
    </div>
  );
}

export default Component1;
