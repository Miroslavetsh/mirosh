import Heading from "../Heading/Heading";
import Container from "../Container/Container";

import styles from "./Preview.module.scss";

const Preview: React.FC = (): React.JSX.Element => {
  return (
    <Container isBig={true} className={styles.outer}>
      <div className={styles.div}>
        <img src="img/preview/div.svg" alt="div-svg" />
      </div>

      <div className={styles.script}>
        <img src="img/preview/script.svg" alt="script-svg" />
      </div>

      <div className={styles.span}>
        <img src="img/preview/span.svg" alt="span-svg" />
      </div>

      <div className={styles.mirosh}>
        <img src="img/preview/mirosh.svg" alt="mirosh-svg" />
      </div>

      <div className={styles.elips}>
        <img src="img/preview/elips.svg" alt="elips-svg" />
      </div>

      <div className={styles.elipsSmall}>
        <img src="img/preview/elips-small.svg" alt="elips-small-svg" />
      </div>

      <Container className={styles.inner}>
        <div className={styles.text}>
          <Heading text="Software Engineer" level={1} />
          <Heading text="Goals" level={3} />
          <p>
            More than 100 features are covered with unit, integration tests,
            Feature Flags and rolled out to production for the last year. Expert
            level React.js and great product sense, have reach expertise in code
            reviewing. In love with Functional Paradigm.
          </p>
        </div>

        <div className={styles.mouse}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M23 0C14.069 0 6.80347 7.37977 6.80347 16.4503V29.5501C6.80347 38.6207 14.069 46 23 46C31.9303 46 39.1964 38.6431 39.1964 29.6005V16.4503C39.1964 7.37977 31.9303 0 23 0ZM36.15 29.6005C36.15 36.9635 30.2512 42.9537 23 42.9537C15.7491 42.9537 9.84989 36.9407 9.84989 29.5497V16.4503C9.84989 9.0593 15.7491 3.04633 23 3.04633C30.2513 3.04633 36.15 9.0593 36.15 16.4503V29.6005Z"
              fill="#E7E7E7"
            />
            <path
              d="M23 12.5916C22.1587 12.5916 21.4768 13.2735 21.4768 14.1148V19.4459C21.4768 20.2872 22.1587 20.9691 23 20.9691C23.8413 20.9691 24.5232 20.2872 24.5232 19.4459V14.1148C24.5232 13.2735 23.8413 12.5916 23 12.5916Z"
              fill="#E7E7E7"
            />
          </svg>
        </div>
      </Container>
      <div className={styles.photo}>
        <img
          src="img/preview/mirosh-with-laptop.png"
          alt="mirosh-with-laptop"
        />
      </div>
      <div className={styles.under}>
        <img
          src="img/preview/shape-under-mirosh.png"
          alt="shape-under-mirosh"
        />
      </div>
    </Container>
  );
};

export default Preview;
