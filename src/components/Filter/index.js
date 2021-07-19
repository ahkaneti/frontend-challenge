import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { LINK } from 'tokens/backend';

import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  remove,
  selectCompanyFilter,
} from 'redux/features/filters/companyFilterSlice';

import { CHECKBOX, CHECKBOX_EMPTY } from 'tokens/icons';

import {
  add as addTag,
  remove as removeTag,
  selectTagFilter,
} from 'redux/features/filters/tagFilterSlice';

import { FilterWrapper, FilterBox, FilterList, FilterValue } from './styles';

export const Filter = ({ filterName }) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const companyFilter = useSelector(selectCompanyFilter);
  const tagFilter = useSelector(selectTagFilter);

  useEffect(() => {
    if (filterName === 'Brands') {
      axios.get(`${LINK}/companies`).then(res => {
        setLoading(false);
        setData(res.data);
      });
    } else {
      axios.get(`${LINK}/tags`).then(res => {
        setLoading(false);
        setData(res.data);
      });
    }
  }, [filterName]);

  const changeFilterStatus = data => {
    if (filterName === 'Tags') {
      if (tagFilter.indexOf(data) !== -1) {
        dispatch(removeTag(data));
      } else {
        dispatch(addTag(data));
      }
    } else {
      if (companyFilter.indexOf(data) !== -1) {
        dispatch(remove(data));
      } else {
        dispatch(add(data));
      }
    }
  };

  const selected = name => {
    if (filterName === 'Brands') {
      return companyFilter.indexOf(name) !== -1;
    } else return tagFilter.indexOf(name) !== -1;
  };

  return (
    <FilterWrapper>
      <p>{filterName}</p>
      <FilterBox>
        <input
          value={searchValue}
          placeholder={`Search ${filterName}`}
          onChange={e => setSearchValue(e.target.value)}
        />
        <FilterList>
          {loading ? (
            <i className="ri-refresh-line" />
          ) : (
            data
              .filter(
                filterName === 'Brands'
                  ? ({ name }) =>
                      name.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                      -1
                  : tag => tag.toLowerCase().indexOf(searchValue) !== -1
              )
              .map(filter => {
                const name = filterName === 'Brands' ? filter.slug : filter;
                return (
                  <FilterValue key={name} selected={selected(name)}>
                    <i
                      className={selected(name) ? CHECKBOX : CHECKBOX_EMPTY}
                      onClick={() => {
                        changeFilterStatus(name);
                      }}
                    />
                    <label>
                      {filterName === 'Brands' ? filter.name : filter}
                    </label>
                    <br />
                  </FilterValue>
                );
              })
          )}
        </FilterList>
      </FilterBox>
    </FilterWrapper>
  );
};
