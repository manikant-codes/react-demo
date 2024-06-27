import React, { createContext, useState } from "react";
import Component1 from "../components/useContextDemo/Component1";

export const userContext = createContext();

function UseContextDemo() {
  const [user, setUser] = useState("Manikant");
  return (
    <userContext.Provider value={user}>
      <Component1 />
    </userContext.Provider>
  );
}

export default UseContextDemo;
