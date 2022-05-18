import { useEffect, useRef } from "react";
import styles from "./title.module.css";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.title}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
