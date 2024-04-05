import React, { useState } from 'react';

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);
const celsiusToFahrenheit = (temp) => ((temp * 9/5) + 32).toFixed(1);

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
            <p>Current Temperature: {renderTemperature(currentTemp)}</p>
            <p>Feels Like: {renderTemperature(feelsLike)}</p>
            {/* <p>Humidity: {humidity}</p> */}
            <button onClick={toggleTemperatureUnit}>
                {isCelsius ? 'Convert to Fahrenheit' : 'Convert to Celsius'}
            </button>
        </div>
    );
};

export default Temperature;
