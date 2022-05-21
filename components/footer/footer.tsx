import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        All rights reserved <br />
        &copy; Toni Morović {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
