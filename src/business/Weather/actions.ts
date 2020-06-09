import {
  WEATHER_FETCH_REQUESTED,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
  WeatherActions,
} from './types';

export function requestWeather(cityName: string): WeatherActions {
  return {
    type: WEATHER_FETCH_REQUESTED,
    payload: cityName,
  };
}

export function requestWeatherSuccess(response: string): WeatherActions {
  return {
    type: WEATHER_FETCH_SUCCEEDED,
    payload: response,
  };
}

export function requestWeatherError(error: string): WeatherActions {
  return {
    type: WEATHER_FETCH_FAILED,
    payload: error,
  };
}
