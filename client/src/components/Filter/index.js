import React, { useState } from 'react';

import { FilterWrapper, FilterBox } from './styles';

export const Filter = ({ filterName, info }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  return (
    <FilterWrapper>
      <p>{filterName}</p>
      <FilterBox>
        <input
          value={searchValue}
          placeholder={`Search ${filterName}`}
          onChange={e => setSearchValue(e.target.value)}
        />
        {info.map(i => {
          return (
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label>{i}</label>
            </div>
          );
        })}
      </FilterBox>
    </FilterWrapper>
  );
};
