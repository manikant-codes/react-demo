import React from "react";
// import "../../styles/home/footer.css";
import styles from "../../styles/home/footer.module.css";

function Footer() {
  // console.log("styles footer", styles);

  return (
    <footer>
      <div className={styles.container}>
        <p>privacy</p>
        <p>contact</p>
      </div>
    </footer>
  );
}

export default Footer;
