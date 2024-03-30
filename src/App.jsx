import React, { useState, useEffect } from "react";
import Search from "./components/Search.jsx";

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
    <div>
      <h1>Weather App</h1>
      <Search onSearch={fetchData} />
      {weatherData && (
        <div>
          <h2>{weatherData.name} temperature:</h2>
          <p>{weatherData.main.temp}</p>
        </div>
      )}
    </div>
  );
};

export default App;
