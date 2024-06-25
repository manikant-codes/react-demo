import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-8 bg-indigo-900 text-white items-center">
      <h1 className="text-2xl font-bold">fetch API</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/customHook">customHook</Link>
        </li>
        <li>
          <Link to="/memo">memo</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
