import { call, put, takeLatest, all } from 'redux-saga/effects';
import { WEATHER_FETCH_REQUESTED, WeatherFetchRequestedAction } from './types';
import { requestWeatherSuccess, requestWeatherError } from './actions';
import { getWeather } from '../../service/WeatherService';

function* fetchWeather(action: WeatherFetchRequestedAction) {
  try {
    const result = yield call(() => getWeather({ city: action.payload }));
    yield put(requestWeatherSuccess(result));
  } catch (e) {
    yield put(requestWeatherError(e.message));
  }
}

function* watchFetchWeather() {
  yield takeLatest(WEATHER_FETCH_REQUESTED, fetchWeather);
}

export default function* sagas() {
  yield all([watchFetchWeather()]);
}
