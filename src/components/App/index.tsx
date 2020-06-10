import React from 'react';
import { Provider } from 'react-redux';
import SearchCityForm from 'components/SearchCityForm';
import { store } from 'store';
import WeatherResult from 'components/WeatherResult';

import './styles.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchCityForm />
        <WeatherResult />
      </div>
    </Provider>
  );
};

export default App;
