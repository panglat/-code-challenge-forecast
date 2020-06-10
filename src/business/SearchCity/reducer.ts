import {
  SearchCityState,
  SearchCityActions,
  ADD_CITY_TO_CITY_LIST,
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
      const cityItem = state.cityList?.find((c) => c === action.payload);
      if (cityItem) {
        return {
          cityList: [
            action.payload,
            ...(state.cityList?.filter(
              (ci) => ci !== action.payload
            ) as string[]),
          ],
        };
      }
      return {
        cityList: [
          action.payload,
          ...(state.cityList?.filter((ci, index) => index < 4) as string[]),
        ],
      };

    default:
      return state;
  }
}
