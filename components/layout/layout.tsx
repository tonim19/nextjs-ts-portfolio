import Footer from "../footer/footer";
import Header from "../header/header";

import styles from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
