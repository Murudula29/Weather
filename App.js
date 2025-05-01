// home.js
import React, { useState } from "react";
import Weather from "./components/Weather";
const Home = () => {
  const [location, setLocation] = useState({ lat: 28.6139, lon: 77.2090 }); // Default: New Delhi

  const handleChange = (e) => {
    const [lat, lon] = e.target.value.split(",");
    setLocation({ lat: parseFloat(lat), lon: parseFloat(lon) });
  };

  return (
    <div className="home">
      <h1>Weather App</h1>
      <select onChange={handleChange}>
        <option value="28.6139,77.2090">New Delhi</option>
        <option value="40.7128,-74.0060">New York</option>
        <option value="51.5074,-0.1278">London</option>
        <option value="35.6895,139.6917">Tokyo</option>
      </select>

      {/* Pass location as props */}
      <Weather lat={location.lat} lon={location.lon} />
    </div>
  );
};

export default Home;
