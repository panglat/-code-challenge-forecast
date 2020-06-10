import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import {
  getWeather,
  getWeatherLoading,
  getWeatherError,
} from 'business/Weather/selectors';
import { AxiosError } from 'axios';

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
    <div className="weather-result__weather">{JSON.stringify(weather)}</div>
  );

  return (
    <div className="weather-result">
      <h3>Weather</h3>
      {isLoading && renderLoading()}
      {weather && renderWeather()}
      {error && renderError()}
    </div>
  );
};

export default WeatherResult;
