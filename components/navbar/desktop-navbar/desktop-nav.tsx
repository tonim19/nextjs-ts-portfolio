import Link from "next/link";

import styles from "./desktop-nav.module.css";

const DesktopNavbar: React.FC = () => {
  return (
    <nav className={styles.desktopNavbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
