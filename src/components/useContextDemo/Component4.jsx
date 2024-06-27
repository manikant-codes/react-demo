import React, { useContext } from "react";
import { userContext } from "../../pages/UseContextDemo";

function Component4() {
  const value = useContext(userContext);

  return <div className="p-8 bg-indigo-400">Hello, {value}!</div>;
}

export default Component4;
