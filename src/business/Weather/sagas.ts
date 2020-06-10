import { call, put, takeLatest, all } from 'redux-saga/effects';
import { WEATHER_FETCH_REQUESTED, WeatherFetchRequestedAction } from './types';
import { requestWeatherSuccess, requestWeatherError } from './actions';
import { getWeather } from '../../service/WeatherService';
import { addCityToCityList } from 'business/SearchCity/actions';
import Weather from 'models/weather';

function* fetchWeather(action: WeatherFetchRequestedAction) {
  try {
    const result: Weather = yield call(() =>
      getWeather({ city: action.payload })
    );
    yield put(requestWeatherSuccess(result));
    yield put(addCityToCityList(result.cityName));
  } catch (e) {
    yield put(requestWeatherError(e));
  }
}

function* watchFetchWeather() {
  yield takeLatest(WEATHER_FETCH_REQUESTED, fetchWeather);
}

export default function* sagas() {
  yield all([watchFetchWeather()]);
}
