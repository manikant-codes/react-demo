import React from "react";
import styles from "../../styles/common/footer.module.css";

function Footer() {
  return (
    <footer className="h-[100px] bg-violet-950 text-[#bdbdbd] p-[32px] flex justify-between">
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
