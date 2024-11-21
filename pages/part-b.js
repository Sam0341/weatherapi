import React, { useState, useEffect } from "react";

const PartB = () => {
  const [locationCode, setLocationCode] = useState("312137"); // Default: Belmopan

  const locations = {
    Belmopan: "312137",
    BelizeCity: "312135",
    LondonUnitedKingdom: "2782994",
    OrangeWalk: "312440",
    Dangriga: "312274",
    SaltLakeCityUtah: "2660788"
    Spain: "715269"
  };

  const handleLocationChange = (e) => {
    const newLocation = locations[e.target.value];
    setLocationCode(newLocation);
  };

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = `https://www.weatherapi.com/weather/widget.ashx?loc=${locationCode}&wid=3&tu=2&div=weatherapi-weather-widget-3`;
    scriptElement.async = true;

    const widgetContainer = document.getElementById(
      "weatherapi-weather-widget-3"
    );
    widgetContainer.innerHTML = ""; // Clear the previous widget
    widgetContainer.appendChild(scriptElement); // Add the new script
  }, [locationCode]);

  return (
    <div className="weather-container">
      <h1>Belize Weather Forecast</h1>
      <label htmlFor="location-select">Choose a location:</label>
      <select
        id="location-select"
        onChange={handleLocationChange}
        style={{ marginLeft: "10px", marginBottom: "20px" }}
      >
        {Object.keys(locations).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <div id="weatherapi-weather-widget-3"></div>
    </div>
  );
};

export default PartB;
