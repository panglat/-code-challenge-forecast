import React from 'react';
import { useSelector } from 'react-redux';
import { latestCities as latestCitiesAction } from 'business/SearchCity/selectors';

import './styles.scss';

const LatestCities: React.FC = () => {
  const latestCities = useSelector(latestCitiesAction) as string[];
  return (
    <div className="latest-cities">
      Latest Cities:{' '}
      {latestCities.map((cityName, index) => (
        <span key={cityName}>
          {cityName}
          {index < 4 && ','}{' '}
        </span>
      ))}
    </div>
  );
};

export default LatestCities;
