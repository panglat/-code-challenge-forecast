import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getWeather,
  getWeatherLoading,
  getWeatherError,
} from 'business/Weather/selectors';
import { AxiosError } from 'axios';
import { Coordinates } from 'models/weather';
import cn from 'classnames';

import './styles.scss';

const WeatherResult: React.FC = () => {
  const weather = useSelector(getWeather);
  const isLoading = useSelector(getWeatherLoading);
  const error = useSelector(getWeatherError);
  const [mapLoading, setMapLoading] = useState(false);

  useEffect(() => {
    setMapLoading(true);
  }, [weather]);

  const renderLoading = () => (
    <div className="weather-result__loading">Getting the weather...</div>
  );

  const renderErrorMessage = () => {
    const axiosError = error as AxiosError;
    return axiosError?.response?.data?.message || axiosError.message;
  };

  const renderError = () => (
    <div className="weather-result__error">
      Failed to the weather. Maybe this message could help you:{' '}
      {renderErrorMessage()}
    </div>
  );

  const renderWeather = () => (
    <div className="weather-result__weather">
      <h3 className="weather-result__weather-header">
        Weather for {`${weather?.cityName}, ${weather?.country}`}
      </h3>
      <p className="weather-result__weather-item">
        <strong>Temperature:</strong> {weather?.main.temp} °C
      </p>
      <p className="weather-result__weather-item">
        <strong>Pressure:</strong> {weather?.main.pressure} hPa
      </p>
      <p className="weather-result__weather-item">
        <strong>Humidity:</strong> {weather?.main.humidity} %
      </p>
      <p className="weather-result__weather-item">
        <strong>Max temperature:</strong> {weather?.main.temp_max} °C
      </p>
      <p className="weather-result__weather-item">
        <strong>Min temperature:</strong> {weather?.main.temp_min} °C
      </p>
      {renderMap()}
    </div>
  );

  const renderMap = () => {
    const coordinates = weather?.coordinates as Coordinates;
    const diffLat = 0.01246;
    const diffLong = 0.02038;
    const bottomLeft = new Coordinates({
      lat: coordinates.lat - diffLat,
      lon: coordinates.lon - diffLong,
    });
    const topRight = new Coordinates({
      lat: coordinates.lat + diffLat,
      lon: coordinates.lon + diffLong,
    });
    const url = `http://www.openstreetmap.org/export/embed.html?bbox=${bottomLeft.lon},${bottomLeft.lat},${topRight.lon},${topRight.lat}&layer=mapnik&marker=${coordinates.lat},${coordinates.lon}`;

    return (
      <div className="weather-result__weather-map">
        {mapLoading && 'Getting the map...'}
        <iframe
          className={cn({ 'weather-result__weather-map--hidden': mapLoading })}
          title="map"
          width="320"
          height="350"
          scrolling="no"
          src={url}
          onLoad={() => setMapLoading(false)}
        />
      </div>
    );
  };

  return (
    <div className="weather-result">
      <div className="weather-result__container">
        {isLoading && renderLoading()}
        {weather && renderWeather()}
        {error && renderError()}
      </div>
    </div>
  );
};

export default WeatherResult;
