import { useState, useEffect } from "react";
import Search from "./components/Search.jsx";
import Temperature from "./components/Temperature.jsx";
import Weather from "./components/Weather.jsx";

const KEY = "362f6c6761f2e294f30ff388950234d8";
const exclude = "daily";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=${exclude}&appid=${KEY}`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  useEffect(() => {
    fetchData("Mumbai");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ marginBottom: "0.5px" }}>Weather</h1>
      <Search onSearch={fetchData} />
      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weatherData.name}</h2>
          <Temperature
            currentTemp={weatherData.main.temp}
            feelsLike={weatherData.main.feels_like}
          />
          <Weather
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            cloudiness={weatherData.clouds.all}
          />
        </div>
      )}
    </div>
  );
};

export default App;
