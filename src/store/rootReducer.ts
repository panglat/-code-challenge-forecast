import { combineReducers } from 'redux';
import { SearchCity } from 'business/SearchCity/reducer';
import { Weather } from 'business/Weather/reducer';

const rootReducer = combineReducers({
  searchCity: SearchCity,
  weather: Weather,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
