import { RootState } from 'store/rootReducer';

export const getWeather = (state: RootState) => state.weather.weather;
export const getWeatherLoading = (state: RootState) => state.weather.loading;
export const getWeatherError = (state: RootState) => state.weather.error;
