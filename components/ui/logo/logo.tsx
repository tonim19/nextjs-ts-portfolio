import Link from "next/link";

import styles from "./logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <h1>Toni Morovic</h1>
      </Link>
    </div>
  );
};

export default Logo;
