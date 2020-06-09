import {
  WEATHER_FETCH_REQUESTED,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
  WeatherState,
  WeatherActions,
} from './types';

const initialState: WeatherState = {
  city: null,
  loading: false,
  error: null,
  weather: null,
};

export function Weather(
  state = initialState,
  action: WeatherActions
): WeatherState {
  switch (action.type) {
    case WEATHER_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case WEATHER_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        weather: action.payload, // { ..action.payload.response },
      };

    case WEATHER_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        weather: null,
        error: action.payload, // action.payload.error,
      };

    default:
      return state;
  }
}
