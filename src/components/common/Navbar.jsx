import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-8 bg-indigo-900 text-white">
      <h1 className="text-4xl font-bold">Indigo</h1>
      <ul className="flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
