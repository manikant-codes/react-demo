import React from "react";
import styles from "../../styles/common/footer.module.css";

function Footer() {
  console.log("styles", styles);
  return (
    <footer className={styles.container}>
      <div>
        <p></p>
      </div>
      <div className={styles.links}>
        <p>privacy</p>
        <p>contact</p>
      </div>
    </footer>
  );
}

export default Footer;
