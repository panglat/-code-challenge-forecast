import configureStore from 'store/configureStore';
import { loadState, saveState } from 'helpers/localStorage';

const persistedState = loadState();
export const store = configureStore(persistedState);

store.subscribe(() => {
  saveState({ searchCity: store.getState().searchCity });
});
