import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Title from "../components/title/title";

import styles from "../styles/portfolio-page.module.css";

const PortfolioPage: NextPage = () => {
  return (
    <div className="container">
      <Title>Portfolio</Title>
      <section className={styles.projects}>
        <h3>Latest Projects</h3>
        <Link href="https://ecommerce-site19.netlify.app/">
          <div className={styles.project}>
            <div className={styles.image}>
              <Image
                src="/images/projects/ecommerce-site.webp"
                alt="Ecommerce project"
                layout="responsive"
                objectFit="cover"
                width={800}
                height={800}
              />
            </div>
            <h4>Ecommerce Site</h4>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default PortfolioPage;
