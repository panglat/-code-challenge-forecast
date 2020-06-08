import { ADD_CITY_TO_CITY_LIST, SearchCityActions } from './types';

export function AddCityToCityList(cityName: string): SearchCityActions {
  return {
    type: ADD_CITY_TO_CITY_LIST,
    payload: cityName,
  };
}
