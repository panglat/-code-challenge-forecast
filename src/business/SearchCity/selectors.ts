import { RootState } from 'store/rootReducer';

export const latestCities = (state: RootState) => state.searchCity.cityList;
