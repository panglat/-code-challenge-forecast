import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchCityForm from '.';
import { store } from 'store';

test('can render with redux with defaults', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <SearchCityForm />
    </Provider>
  );

  fireEvent.change(getByLabelText(/city/i), {
    target: { value: 'Mendoza' },
  });

  waitForElement(() => getByLabelText(/city/i)).then((el) => {
    const input = el as HTMLInputElement;
    expect(input).toBeDefined();
    expect(input.value).toEqual('Mendoza');
  });
});
