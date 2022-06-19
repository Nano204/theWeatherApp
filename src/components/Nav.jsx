import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoGrid}>
          <p className={styles.titleHelp1}>The</p>
          <h1 className={styles.title}>Weather</h1>
          <p className={styles.titleHelp2}>App</p>
        </div>
      </div>
      <div className={styles.divLink}>
        <Link to="/" className={styles.link}>
          <p>Home</p>
        </Link>
        <p>||</p>
        <Link to="/about" className={styles.link}>
          <p>About</p>
        </Link>
      </div>
    </div>
  );
}
