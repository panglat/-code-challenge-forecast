import React from 'react';
import { useSelector } from 'react-redux';
import {
  getWeather,
  getWeatherLoading,
  getWeatherError,
} from 'business/Weather/selectors';
import { AxiosError } from 'axios';

import './styles.scss';

const WeatherResult: React.FC = () => {
  const weather = useSelector(getWeather);
  const isLoading = useSelector(getWeatherLoading);
  const error = useSelector(getWeatherError);

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
    </div>
  );

  return (
    <div className="weather-result">
      {isLoading && renderLoading()}
      {weather && renderWeather()}
      {error && renderError()}
    </div>
  );
};

export default WeatherResult;
