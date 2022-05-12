import Link from "next/link";

import styles from "./mobile-nav.module.css";

const MobileNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
