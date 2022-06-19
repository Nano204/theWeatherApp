import React from "react";
import styles from "./CurrentCity.module.css";
import {
  weatherIcon,
  windIcon,
  windDegIcon,
  humidityIcon,
  tempMaxIcon,
  tempMinIcon,
} from "../icons/iconsBootstrap";

export default function CurrentCity({ city, setMainCity, mainCity }) {
  React.useEffect(() => {
    city.id
      ? setMainCity(city.id)
      : mainCity
      ? setMainCity(mainCity)
      : setMainCity("Cali");
  }, []);

  if (city) {
    const {
      name,
      coodlon,
      coodlat,
      feelsLike,
      humidity,
      temp,
      tempMax,
      tempMin,
      country,
      weather,
      windSpeed,
      windDeg,
    } = city;
    return (
      <div className={styles.main}>
        <div className={styles.currentCity}>
          <div className={styles.secondaryDataIcon}>{windIcon}</div>
          <p className={styles.secondaryData}>{windSpeed.toFixed(1)} km/h</p>
          <div className={styles.secondaryDataIcon}>{windDegIcon(windDeg)}</div>
          <p className={styles.secondaryData}>{windDeg}°</p>
          <div className={styles.secondaryDataIcon}>{humidityIcon}</div>
          <p className={styles.secondaryData}>{humidity}%</p>
          <h1 className={styles.cityName}>{name}</h1>
          <p className={styles.country}>{country} </p>
          <b className={styles.coords} style={{ gridColumn: "2" }}>
            Lon:
          </b>
          <p className={styles.coords} style={{ gridColumn: "3" }}>
            {coodlon.toFixed(2)}
          </p>
          <b className={styles.coords} style={{ gridColumn: "4" }}>
            Lat:
          </b>
          <p className={styles.coords} style={{ gridColumn: "5" }}>
            {coodlat.toFixed(2)}
          </p>
          <p className={styles.temp}>{temp.toFixed(1)}</p>
          <b className={styles.adtionalTempsIcon}>°C</b>
          <div className={styles.adtionalTempsIcon}>{tempMaxIcon}</div>
          <p className={styles.adtionalTemps}>
            + {(tempMax - temp).toFixed(1)}°
          </p>
          <div className={styles.adtionalTempsIcon}>{tempMinIcon}</div>
          <p className={styles.adtionalTemps}>
            - {(temp - tempMin).toFixed(1)}°
          </p>
          <p style={{ gridColumn: "1/7", textAlign: "center" }}>
            Feels like ({feelsLike}°)
          </p>
          <div className={styles.weather}>{weatherIcon(weather)}</div>
        </div>
      </div>
    );
  }
}
