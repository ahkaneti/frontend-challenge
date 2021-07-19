import React from 'react';

import { SortWrapper, SortList, SortValue } from './styles';

import { edit, selectSort } from 'redux/features/sort/sortSlice';
import { useDispatch, useSelector } from 'react-redux';

import { CHECKBOX_CIRCLE, CHECKBOX_CIRCLE_EMPTY } from 'tokens/icons';

import { SORT_MODES } from 'tokens/sort';

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
        {Object.values(SORT_MODES).map((value, i) => {
          return (
            <SortValue key={i}>
              <i
                className={
                  sort === value ? CHECKBOX_CIRCLE : CHECKBOX_CIRCLE_EMPTY
                }
                onClick={() => changeSort(value)}
              />
              <label>{value}</label>
            </SortValue>
          );
        })}
      </SortList>
    </SortWrapper>
  );
};
