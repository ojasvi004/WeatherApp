import React, { useState } from 'react';

const Temperature = ({ currentTemp }) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const celsius = (currentTemp - 273.15).toFixed(1);
    const fahrenheit = ((currentTemp - 273.15) * 9/5 + 32).toFixed(1);

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    return (
        <div>
            <p>{isCelsius ? `${celsius}°C` : `${fahrenheit}°F`}</p>
            <button onClick={toggleTemperatureUnit}>
                {isCelsius ? 'Convert to Fahrenheit' : 'Convert to Celsius'}
            </button>
        </div>
    );
};

export default Temperature;
