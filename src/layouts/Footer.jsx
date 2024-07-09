import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-[#bdbdbd] px-8 py-6 flex justify-between">
      <div>
        <p>&copy; 2024 My Website</p>
      </div>
      <div className="flex gap-4">
        <p>privacy</p>
        <p>contact</p>
      </div>
    </footer>
  );
}

export default Footer;
