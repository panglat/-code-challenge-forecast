export const ADD_CITY_TO_CITY_LIST = 'ADD_CITY_TO_CITY_LIST';

interface AddCityToCityListAction {
  type: typeof ADD_CITY_TO_CITY_LIST;
  payload: string;
}

export type SearchCityActions = AddCityToCityListAction;

export interface SearchCityState {
  cityList: string[] | null;
}
