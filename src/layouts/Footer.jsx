import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white p-8 flex justify-between">
      <p>&copy; fetch API 2024</p>
      <ul className="flex gap-4">
        <li>Privacy</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
}

export default Footer;
