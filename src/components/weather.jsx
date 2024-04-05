const cloudName = (cloudinessPercentage) => {
    if (cloudinessPercentage < 20) {
        return 'Clear';
    } else if (cloudinessPercentage < 40) {
        return 'Partly Cloudy';
    } else if (cloudinessPercentage < 70) {
        return 'Mostly Cloudy';
    } else {
        return 'Cloudy';
    }
};


const Weather = ({ humidity, cloudiness, windSpeed}) => {
    return (
        <div>
            <p>{cloudName(cloudiness)}</p>
            <p>Wind Speed: {windSpeed}%</p>

       </div>
    )
}
export default Weather;