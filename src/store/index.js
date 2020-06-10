import configureStore from 'store/configureStore';
import { loadState, saveState } from 'helpers/localStorage';

const persistedState = loadState();
debugger;
export const store = configureStore(persistedState);

store.subscribe(() => {
  saveState({ searchCity: store.getState().searchCity });
});
