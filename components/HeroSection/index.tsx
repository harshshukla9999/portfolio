import React from "react";
import styles from "./styles.module.scss";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <section id="intro" className={styles.content}>
        <p>
          Hi, my name is <span className={styles.name}>Harsh Shukla.</span>
        </p>

        <h2>I develop the front end of websites.</h2>

        <p>
          I'm a developer specializing in HTML, CSS, Javascript, React, Next js,
          Typescript.
        </p>

        <p>Currently, I'm working at Primathon.</p>
      </section>
      <section>

      </section>
    </div>
  );
}

export default HeroSection;
