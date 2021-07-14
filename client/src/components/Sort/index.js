import React, { useState, useEffect } from 'react';

import { SortWrapper, SortList, SortValue } from './styles';

import { edit, selectSort } from 'redux/features/sort/sortSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const changeSort = sortVal => {
    dispatch(edit(sortVal));
  };

  return (
    <SortWrapper>
      <p>Sorting</p>
      <SortList>
        <SortValue>
          <i
            className={
              sort === 'Price low to high'
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort('Price low to high')}
          />
          <label>Price low to high</label>
        </SortValue>
        <SortValue>
          <i
            className={
              sort === 'Price high to low'
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort('Price high to low')}
          />
          <label>Price high to low</label>
        </SortValue>
        <SortValue>
          <i
            className={
              sort === 'New to old'
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort('New to old')}
          />
          <label>New to old</label>
        </SortValue>
        <SortValue>
          <i
            className={
              sort === 'Old to new'
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort('Old to new')}
          />
          <label>Old to new</label>
        </SortValue>
      </SortList>
    </SortWrapper>
  );
};
