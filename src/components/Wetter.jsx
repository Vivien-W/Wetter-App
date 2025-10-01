import React, { useState } from "react";
import "./Wetter.css";
import icon_search from "../assets/images/icon-search.svg";
import icon_sun from "../assets/images/icon-sun.svg";
import icon_cloud from "../assets/images/icon-cloud.svg";
import icon_cloudsun from "../assets/images/icon-cloudsun.svg";
import icon_rain from "../assets/images/icon-rain.svg";
import icon_lightning from "../assets/images/icon-lightning.svg";
import icon_snow from "../assets/images/icon-snow.svg";

// Die Open-Meteo-API liefert im Objekt current_weather auch einen "weathercode" -> Icon-Anzeige gemäß Wetterlage möglich
const weatherIcons = {
  0: icon_sun, // Klar
  1: icon_cloudsun, // Leicht bewölkt
  2: icon_cloud, // Bewölkt
  3: icon_cloud, // Stark bewölkt
  45: icon_cloud, // Nebel
  48: icon_cloud, // Nebel mit Reif
  51: icon_rain, // leichter Nieselregen
  61: icon_rain, // leichter Regen
  63: icon_rain, // mäßiger Regen
  65: icon_rain, // starker Regen
  66: icon_rain, // gefrierender Regen
  71: icon_snow, // leichter Schnee
  73: icon_snow, // mäßiger Schnee
  75: icon_snow, // starker Schnee
  95: icon_lightning, // Gewitter
  96: icon_lightning, // Gewitter mit Hagel
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(icon_sun);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  const handleSearch = async () => {
    try {
      // 1. Stadt -> Koordinaten
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1&language=de&format=json`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("Stadt nicht gefunden");
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Wetterdaten (Temperatur, Luftfeuchtigkeit und Wind)
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m&timezone=auto`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      // 3. Daten extrahieren
      const current = weatherData.current_weather;
      setTemperature(current.temperature);
      setWindSpeed(current.windspeed);
      setWeatherIcon(weatherIcons[current.weathercode] || icon_cloud);
      setLocation(`${name}, ${country}`);

      // 4. Luftfeuchtigkeit anhand aktueller Stunde
      const now = new Date().toISOString().slice(0, 13); // z. B. "2025-06-01T14"
      const hourIndex = weatherData.hourly.time.findIndex((time) =>
        time.startsWith(now)
      );
      const humidityNow =
        hourIndex !== -1
          ? weatherData.hourly.relative_humidity_2m[hourIndex]
          : null;
      setHumidity(humidityNow);
    } catch (error) {
      console.error("Fehler bei der Wetterabfrage:", error);
      alert("Es ist ein Fehler aufgetreten.");
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Suche..."
          value={city}
          onChange={(e) => setCity(e.target.value)} /*Suche mit Lupe-Icon*/
          onKeyDown={(e) => {
            /*Suche mit Enter-Taste*/
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <img
          src={icon_search}
          alt="icon-search"
          className="icon_search"
          onClick={handleSearch}
        />
      </div>

      <img src={weatherIcon} alt="Wetter-Icon" className="icon_sun" />

      {temperature !== null && (
        <>
          <p className="temperature">{temperature}° C</p>
          <p className="location">{location}</p>
          <p className="details">💨 Wind: {windSpeed} km/h</p>
          <p className="details">💧 Luftfeuchtigkeit: {humidity}%</p>
        </>
      )}
    </div>
  );
};

export default Weather;
