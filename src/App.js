import React from "react";
import { Route } from "react-router-dom";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import About from "./components/About";
import CurrentCity from "./components/CurrentCity";
import "./App.css";

// const apiKey = "762ca9fb977a8c95bd3fc79e050f1749";
const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export default function App() {
  const [cities, setCities] = React.useState([]);
  const [currentCity, setCurrent] = React.useState("");

  async function setMainCity(newCity) {
    let city = cities.find((city) => city.id === newCity);
    if (!city) {
      city = await searchFor(newCity);
    }
    !cities.length && setCities([...cities, city]);
    setCurrent(city);
  }
  
  function onClose(id) {
    cities.length > 1
    ? setCities((cities) => cities.filter((city) => city.id !== id))
    : alert("The cities list cannot be empty");
  }
  
  async function onSearch(newCity) {
    const city = await searchFor(newCity);
    if (city) {
      cities.find((element) => element.id === city.id)
      ? alert("City already exist")
      : setCities((cities) => [...cities, city]);
    } else {
      alert("City not founded");
    }
  }
  
  async function searchFor(ciudad) {
    const url1 = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
    const url2 = `http://api.openweathermap.org/data/2.5/weather?id=${ciudad}&appid=${apiKey}&units=metric`;
    
    const response =
    (await fetch(url1).then((r) => r.ok && r)) ||
    (await fetch(url2).then((r) => r.ok && r));
    
    return new Promise((resolve) => {
      if (response) {
        response.json().then((response) => {
          const city = {
            id: response.id,
            name: response.name,
            coodlon: response.coord.lon,
            coodlat: response.coord.lat,
            feelsLike: response.main.feels_like,
            humidity: response.main.humidity,
            temp: response.main.temp,
            tempMax: response.main.temp_max,
            tempMin: response.main.temp_min,
            country: response.sys.country,
            weather: response.weather[0].main,
            description: response.weather[0].description,
            icon: response.weather[0].icon,
            windSpeed: response.wind.speed,
            windDeg: response.wind.deg,
          };
          resolve(city);
        });
      } else {
        alert("City not found");
      }
    });
  }

  return (
    <div className="app">
      <div className="header">
        <Nav />
      </div>
      <Route
        exact
        path="/"
        render={() => (
          <div className="content">
            <div className="main">
              <CurrentCity
                setMainCity={setMainCity}
                city={currentCity}
              />
              <Cards cities={cities} onClose={onClose} onSelect={setMainCity} />
            </div>
            <div className="footer">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        )}
      />
      <Route
        exact
        path="/city/:cityId"
        render={({ match }) => (
          <div className="content">
            <div className="main">
              <CurrentCity
                setMainCity={setMainCity}
                mainCity={match.params.cityId}
                city={currentCity}
              />
              <Cards cities={cities} onClose={onClose} onSelect={setMainCity} />
            </div>
            <div className="footer">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        )}
      />
      <Route path="/about" component={About} />
    </div>
  );
}
