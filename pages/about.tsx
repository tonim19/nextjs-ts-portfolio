import { NextPage } from "next";
import Title from "../components/title/title";

import styles from "../styles/about-page.module.css";

const AboutPage: NextPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <Title>About</Title>
      <section className={styles.about}>
        <h3>About Me</h3>
        <p>
          My name is Toni Morović and I&apos;m a passionate Frontend Web
          Developer. Skilled in HTML, CSS, Javascript, Vue and React, also
          learned Backend technologies to get a broader look of how complete Web
          Development works.
        </p>
        <p>
          I love to explore and learn new technologies, so whether you have an
          exciting project that I could contribute to, job opportunity or just
          chat about tech. Feel free to contact me.
        </p>
      </section>
      <section className={styles.skills}>
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>BOOTSTRAP</li>
          <li>SASS</li>
          <li>VUE</li>
          <li>REACT</li>
          <li>NEXTJS</li>
          <li>GIT</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
