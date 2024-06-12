import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-8 bg-indigo-900 text-white items-center">
      <h1 className="text-2xl font-bold">fetch API</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
