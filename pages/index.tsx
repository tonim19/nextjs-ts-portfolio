import type { NextPage } from "next";
import Link from "next/link";

import styles from "../styles/home-page.module.css";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <h3 className={styles.title}>Hey, I&apos;m Toni Morović</h3>
      <p className={styles.description}>Frontend Web Developer</p>
      <div className={styles.links}>
        <Link href="/about">
          <a className={styles.btn}>About Me</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.btn}>Portfolio</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
