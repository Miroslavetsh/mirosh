import React from "react";

import Container from "@/components/Landing/Container/Container";
import Heading from "@/components/Landing/Heading/Heading";

import styles from "./AboutMe.module.scss";

const startedProgramming = new Date("2019-11-27").getFullYear();
const currentYear = new Date().getFullYear();
const yearsOfDevelopment = currentYear - startedProgramming;

const AboutMe: React.FC = () => {
  return (
    <Container id="about" isBig={true} className={styles.outer}>
      <div className={styles.dots}>
        <img src="img/about-me/dots.svg" alt="dots-svg" />
      </div>

      <div className={styles.script}>
        <img src="img/preview/script.svg" alt="script-svg" />
      </div>

      <div className={styles.span}>
        <img src="img/preview/span.svg" alt="span-svg" />
      </div>

      <div className={styles.mirosh}>
        <img src="img/about-me/mirosh.png" alt="mirosh-svg" />
      </div>

      <div className={styles.elips}>
        <img src="img/preview/elips.svg" alt="elips-svg" />
      </div>

      <div className={styles.elipsSmall}>
        <img src="img/preview/elips-small.svg" alt="elips-small-svg" />
      </div>

      <Container className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.inner}>
            <Heading text="Few Words" level={3} />
            <Heading text="About Me" level={1} />
            <table className={styles.list}>
              <thead>
                <tr>
                  <td>Experience</td>
                  <td>{yearsOfDevelopment}+ years</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Degree</td>
                  <td>Master of Networking and Web Technologies</td>
                </tr>
              </thead>
            </table>
            <p>
              Experienced Software Engineer ({yearsOfDevelopment}+ years of
              experience). Freestyler, Leader, Mentor and Achiever with deep
              understanding of sustainability and architecture shaping.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AboutMe;
