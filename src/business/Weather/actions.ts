import {
  WEATHER_FETCH_REQUESTED,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
  WeatherActions,
} from './types';
import Weather from 'models/weather';

export function requestWeather(cityName: string): WeatherActions {
  return {
    type: WEATHER_FETCH_REQUESTED,
    payload: cityName,
  };
}

export function requestWeatherSuccess(response: Weather): WeatherActions {
  return {
    type: WEATHER_FETCH_SUCCEEDED,
    payload: response,
  };
}

export function requestWeatherError(error: Error): WeatherActions {
  return {
    type: WEATHER_FETCH_FAILED,
    payload: error,
  };
}
