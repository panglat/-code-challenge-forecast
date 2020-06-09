import Weather from 'models/weather';

export const WEATHER_FETCH_REQUESTED = 'WEATHER_FETCH_REQUESTED';
export const WEATHER_FETCH_SUCCEEDED = 'WEATHER_FETCH_SUCCEEDED';
export const WEATHER_FETCH_FAILED = 'WEATHER_FETCH_FAILED';

export interface WeatherFetchRequestedAction {
  type: typeof WEATHER_FETCH_REQUESTED;
  payload: string;
}

interface WeatherFetchSucceededAction {
  type: typeof WEATHER_FETCH_SUCCEEDED;
  payload: Weather;
}

interface WeatherFetchFailedAction {
  type: typeof WEATHER_FETCH_FAILED;
  payload: string;
}

export type WeatherActions =
  | WeatherFetchRequestedAction
  | WeatherFetchSucceededAction
  | WeatherFetchFailedAction;

export interface WeatherState {
  city: string | null;
  weather: Weather | null;
  loading: boolean;
  error: string | null;
}
