import React from 'react';
import { useSelector } from 'react-redux';
import { latestCities as latestCitiesAction } from 'business/SearchCity/selectors';
import { CityListItem } from 'business/SearchCity/types';

import './styles.scss';

const LatestCities: React.FC = () => {
  const latestCities = useSelector(latestCitiesAction) as CityListItem[];
  return (
    <div className="latest-cities">
      Latest Cities:
      {latestCities.map((cityItem: CityListItem) => (
        <span>{cityItem.name}, </span>
      ))}
    </div>
  );
};

export default LatestCities;
