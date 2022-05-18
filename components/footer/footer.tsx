import React from "react";

import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        All rights reserved <br />
        &copy; Toni Morovic {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
