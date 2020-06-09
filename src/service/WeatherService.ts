/**
 * @file Manages user requests.
 * @module services/UserService
 */
import OpenWeatherMapAPI from 'api/OpenWeatherMapAPI';
import Weather, { WeatherData } from 'models/weather';

// eslint-disable-next-line import/prefer-default-export
export const getWeather = async (
  parameters = {
    city: 'mendoza',
  }
): Promise<Weather> => {
  try {
    const response = await OpenWeatherMapAPI.get<WeatherData>('weather', {
      params: {
        q: parameters.city,
        appid: process.env.REACT_APP_NOT_SECRET_CODE,
        units: 'metric',
      },
    });
    return new Weather(response.data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    throw err;
  }
};
