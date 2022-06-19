import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { weatherIcon, tempMaxIcon, tempMinIcon } from "../icons/iconsBootstrap";

//Componente funcional
export default function Card({ city, onClose, onSelect }) {
  const { id, country, name, temp, tempMax, tempMin, weather } = city;
  return (
    <div className={styles.card}>
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => onSelect(id)}
        to={`/city/${id}`}
      >
        <h1 className={styles.title}>{name}</h1>
        <h2 className={styles.country}>{country}</h2>
        <div className={styles.data}>
          <p className={styles.temp}>{Math.round(temp)}°C</p>
          <div className={styles.subData}>{tempMaxIcon}</div>
          <p className={styles.subData}>+ {Math.round(tempMax - temp)}°</p>
          <div className={styles.subData}>{tempMinIcon}</div>
          <p className={styles.subData}>- {Math.round(temp - tempMin)}°</p>
          <div className={styles.weatherIcon}>{weatherIcon(weather)}</div>
        </div>
      </Link>
      <button className={styles.closeButton} onClick={() => onClose(id)}>
        Close
      </button>
    </div>
  );
}
