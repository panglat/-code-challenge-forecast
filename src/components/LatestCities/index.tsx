import React from 'react';
import { useSelector } from 'react-redux';
import { latestCities as latestCitiesAction } from 'business/SearchCity/selectors';

import './styles.scss';

interface LatestCitiesProps {
  onCitySelected: (city: string) => void;
  disabled: boolean;
}

const LatestCities: React.FC<LatestCitiesProps> = ({
  onCitySelected,
  disabled,
}) => {
  const latestCities = useSelector(latestCitiesAction) as string[];
  return (
    <div className="latest-cities">
      Latest Cities:{' '}
      {latestCities.map((cityName, index) => (
        <span key={cityName}>
          <button
            disabled={disabled}
            type="button"
            className="latest-cities__city"
            onClick={() => onCitySelected(cityName)}
          >
            {cityName}
          </button>
          {index < 4 && ','}{' '}
        </span>
      ))}
    </div>
  );
};

export default LatestCities;
