import Link from "next/link";

import styles from "./mobile-nav.module.css";

interface Props {
  handleClick: () => void;
}

const MobileNavbar: React.FC<Props> = ({ handleClick }) => {
  const clickHandler = () => {
    handleClick();
  };

  return (
    <nav className={styles.navbar} onClick={clickHandler}>
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

export default MobileNavbar;
