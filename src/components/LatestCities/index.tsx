import React from 'react';
import { useSelector } from 'react-redux';
import { latestCities as latestCitiesAction } from 'business/SearchCity/selectors';

import './styles.scss';

interface LatestCitiesProps {
  onCitySelected: (city: string) => void;
}

const LatestCities: React.FC<LatestCitiesProps> = ({ onCitySelected }) => {
  const latestCities = useSelector(latestCitiesAction) as string[];
  return (
    <div className="latest-cities">
      Latest Cities:{' '}
      {latestCities.map((cityName, index) => (
        <span key={cityName} onClick={() => onCitySelected(cityName)}>
          {cityName}
          {index < 4 && ','}{' '}
        </span>
      ))}
    </div>
  );
};

export default LatestCities;
