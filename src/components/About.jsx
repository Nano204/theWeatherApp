import React from "react";
import styles from "./About.module.css";
import myImage from "../images/Imagen1.png";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <p className={styles.titleHelp1}>The</p>
          <h1 className={styles.title}>Weather</h1>
          <p className={styles.titleHelp2}>App</p>
          <img className={styles.myImage} src={myImage} alt="Nano" />
        </div>
        <span className={styles.description}>
          The weather app is a React based SPA that I decided to make to
          practice and improve my frontend skills. It is connected to the to{" "}
          <a
            href="https://openweathermap.org/api"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "aqua" }}
          >
            OpenWeather API
          </a>{" "}
          and was created using the following technologies and libraries:
        </span>
        <div className={styles.techBox}>
          <img
            className={styles.techIcon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            className={styles.techIcon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="React"
          />
          <img
            className={styles.techIcon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            className={styles.techIcon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            className={styles.techIcon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
            alt="Boostrap"
          />
          <img
            className={styles.techIcon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg"
            alt="Devicon"
          />
        </div>
      </div>
    </div>
  );
}
