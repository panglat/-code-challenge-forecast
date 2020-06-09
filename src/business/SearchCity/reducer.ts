import {
  SearchCityState,
  SearchCityActions,
  ADD_CITY_TO_CITY_LIST,
  CityListItem,
} from './types';

const initialState: SearchCityState = {
  cityList: [],
};

export function SearchCity(
  state = initialState,
  action: SearchCityActions
): SearchCityState {
  switch (action.type) {
    case ADD_CITY_TO_CITY_LIST:
      return {
        cityList: [
          ...(state.cityList as CityListItem[]),
          { name: action.payload, timeStamp: Date.now() },
        ],
      };

    default:
      return state;
  }
}
