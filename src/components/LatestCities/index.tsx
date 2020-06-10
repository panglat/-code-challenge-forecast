import React from 'react';
import { useSelector } from 'react-redux';
import { latestCities as latestCitiesAction } from 'business/SearchCity/selectors';
import cn from 'classnames';

import './styles.scss';

interface LatestCitiesProps {
  className?: string;
  onCitySelected: (city: string) => void;
  disabled: boolean;
}

const LatestCities: React.FC<LatestCitiesProps> = ({
  className,
  disabled,
  onCitySelected,
}) => {
  const latestCities = useSelector(latestCitiesAction) as string[];
  return (
    <div className={cn('latest-cities', className)}>
      Latest Cities:{' '}
      {latestCities.map((cityName, index) => (
        <span key={cityName}>
          <button
            className="latest-cities__city"
            disabled={disabled}
            type="button"
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
