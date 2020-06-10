import React from 'react';
import { render } from '@testing-library/react';
import LatestCities from '.';

test('renders learn react link', () => {
  const { getByText } = render(<LatestCities />);
});
