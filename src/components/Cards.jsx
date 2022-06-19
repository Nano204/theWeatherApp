import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards({ cities, onClose, onSelect }) {
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card key={city.id} city={city} onClose={onClose} onSelect={onSelect} />
      ))}
    </div>
  );
}
