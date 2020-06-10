import React from 'react';
import { Provider } from 'react-redux';
import SearchCityForm from 'components/SearchCityForm';
import { store } from 'store';
import WeatherResult from 'components/WeatherResult';

import './styles.scss';
import LatestCities from 'components/LatestCities';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchCityForm />
        <LatestCities />
        <WeatherResult />
      </div>
    </Provider>
  );
};

export default App;
