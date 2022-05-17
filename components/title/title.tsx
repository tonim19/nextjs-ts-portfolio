import { useEffect, useRef } from "react";
import styles from "./title.module.css";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  const title = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const line3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    title.current!.addEventListener("mouseover", () => {
      line1.current!.style.transform = `translateX(${title.current})`;
    });
  }, []);

  return (
    <div ref={title} className={styles.title}>
      <div ref={line1} className={styles.line1}></div>
      <div ref={line2} className={styles.line2}></div>
      <div ref={line3} className={styles.line3}></div>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
