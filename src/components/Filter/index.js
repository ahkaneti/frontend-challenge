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
  const [tags, setTags] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const companyFilter = useSelector(selectCompanyFilter);
  const tagFilter = useSelector(selectTagFilter);

  useEffect(() => {
    if (filterName === 'Brands') {
      axios.get(`${LINK}/companies`).then(res => {
        setLoading(false);
        setCompanies(res.data);
      });
    } else {
      axios.get(`${LINK}/tags`).then(res => {
        setLoading(false);
        setTags(res.data);
      });
    }
  }, [filterName]);

  const changeTagFilterStatus = tag => {
    if (tagFilter.indexOf(tag) !== -1) {
      dispatch(removeTag(tag));
    } else {
      dispatch(addTag(tag));
    }
  };

  const changeCompanyFilterStatus = company => {
    if (companyFilter.indexOf(company) !== -1) {
      dispatch(remove(company));
    } else {
      dispatch(add(company));
    }
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
          ) : filterName === 'Brands' ? (
            companies
              .filter(
                ({ name }) =>
                  name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
              )
              .map(company => {
                return (
                  <FilterValue
                    key={company.slug}
                    selected={companyFilter.indexOf(company.slug) !== -1}
                  >
                    <i
                      className={
                        companyFilter.indexOf(company.slug) !== -1
                          ? CHECKBOX
                          : CHECKBOX_EMPTY
                      }
                      onClick={() => {
                        changeCompanyFilterStatus(company.slug);
                      }}
                    />
                    <label>{company.name}</label>
                    <br />
                  </FilterValue>
                );
              })
          ) : (
            tags
              .filter(tag => tag.toLowerCase().indexOf(searchValue) !== -1)
              .map(tag => {
                return (
                  <FilterValue
                    key={tag}
                    selected={tagFilter.indexOf(tag) !== -1}
                  >
                    <i
                      className={
                        tagFilter.indexOf(tag) !== -1
                          ? CHECKBOX
                          : CHECKBOX_EMPTY
                      }
                      onClick={() => {
                        changeTagFilterStatus(tag);
                      }}
                    />
                    <label>{tag}</label>
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
