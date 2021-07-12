import React, { useState, useEffect } from 'react';

import { SortWrapper, SortValues } from './styles';

export const Sort = props => {
  const [sortValue, setSortValue] = useState('Price High to Low');

  useEffect(() => {
    props.setSortVal(sortValue);
  }, [props, sortValue]);

  const changeSort = e => {
    e.persist();
    setSortValue(e.target.value);
  };
  return (
    <SortWrapper>
      <p>Sorting</p>
      <SortValues onChange={changeSort}>
        <label>
          <input
            type="radio"
            value="Price High to Low"
            checked={sortValue === 'Price High to Low'}
            onChange={e => setSortValue(e.target.value)}
          />
          Price High to Low
        </label>
        <label>
          <input
            type="radio"
            value="Price Low to High"
            checked={sortValue === 'Price Low to High'}
            onChange={e => setSortValue(e.target.value)}
          />
          Price Low to High
        </label>
        <label>
          <input
            id={2}
            type="radio"
            value="New to Old"
            checked={sortValue === 'New to Old'}
            onChange={e => setSortValue(e.target.value)}
          />
          New to Old
        </label>
        <label>
          <input
            type="radio"
            value="Old to New"
            checked={sortValue === 'Old to New'}
            onChange={e => setSortValue(e.target.value)}
          />
          Old to New
        </label>
      </SortValues>
    </SortWrapper>
  );
};
