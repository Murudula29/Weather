// weather.js
import React, { useEffect, useState } from "react";


const Weather = ({ lat = 28.6139, lon = 77.2090 }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data.current_weather);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return (
    <div className="weather-box">
      <h2>🌤 Current Weather</h2>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div>
          <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
          <p><strong>Wind Speed:</strong> {weatherData.windspeed} km/h</p>
          <p><strong>Time:</strong> {weatherData.time}</p>
        </div>
      ) : (
        <p>Weather data unavailable.</p>
      )}
    </div>
  );
};

export default Weather;
