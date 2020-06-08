import { combineReducers } from 'redux';
import { SearchCity } from 'business/SearchCity/reducer';

const rootReducer = combineReducers({
  searchCity: SearchCity,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
