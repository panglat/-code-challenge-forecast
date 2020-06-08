import React from 'react';
import { Provider } from 'react-redux';
import SearchCityForm from 'components/SearchCityForm';
import { store } from 'store';

import './styles.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchCityForm />
      </div>
    </Provider>
  );
};

export default App;
