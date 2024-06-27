import React, { useContext } from "react";
import Component4 from "./Component4";
import { userContext } from "../../pages/UseContextDemo";

function Component3() {
  const value = useContext(userContext);
  return (
    <div className="p-8 bg-indigo-300">
      <p>From 3 {value}</p>
      <Component4 />
    </div>
  );
}

export default Component3;
