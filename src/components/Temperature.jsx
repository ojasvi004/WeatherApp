import { useState } from "react";
/* eslint-disable react/prop-types */

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);
const celsiusToFahrenheit = (temp) => ((temp * 9) / 5 + 32).toFixed(1);

const Temperature = ({ currentTemp, feelsLike }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const renderTemperature = (temp) => {
    if (isCelsius) {
      return `${kelvinToCelsius(temp)}°C`;
    } else {
      const tempInCelsius = kelvinToCelsius(temp);
      return `${celsiusToFahrenheit(tempInCelsius)}°F`;
    }
  };

  return (
    <div>
      <p style={{ fontSize: "44px", fontWeight: "bold" }}>
        {renderTemperature(currentTemp)}
      </p>
      <p style={{ fontSize: "16px" }}>
        Feels Like: {renderTemperature(feelsLike)}
      </p>
      {/* <p>Humidity: {humidity}</p> */}
      <br />
      <button
        className="tempChange"
        style={{
          fontSize: "16px",
          backgroundColor: "#506A88",
          color: "white",
          padding: "8px",
          borderStyle: "none",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          transition: "box-shadow 0.3s",
          ":hover": {
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.6)",
          },
        }}
        onClick={toggleTemperatureUnit}
      >
        {isCelsius ? "Convert to Fahrenheit" : "Convert to Celsius"}
      </button>
    </div>
  );
};

export default Temperature;
