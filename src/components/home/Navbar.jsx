import React from "react";

function Navbar() {
  return (
    <div
      // style="display: flex; background-color: red;"
      style={{
        display: "flex",
        padding: "24px",
        backgroundColor: "#673ab7",
        alignItems: "center",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <h1 style={{ color: "white" }}>Logo</h1>
      </div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          gap: "16px",
          color: "white",
          margin: "0px",
          padding: "0px",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
