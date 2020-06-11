import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import LatestCities from '.';
import { store } from 'store';

test('can render with redux with defaults', () => {
  const { getByText } = render(
    <Provider store={store}>
      <LatestCities onCitySelected={() => {}} disabled={false} />
    </Provider>
  );
});
