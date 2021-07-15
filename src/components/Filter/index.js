import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { LINK } from 'tokens/backend';

import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  remove,
  selectCompanyFilter,
} from 'redux/features/filters/companyFilterSlice';

import { FilterWrapper, FilterBox, CompanyList, Company } from './styles';

export const Filter = ({ filterName }) => {
  const [searchValue, setSearchValue] = useState('');
  const [companies, setCompanies] = useState([]);

  const dispatch = useDispatch();
  const companyFilter = useSelector(selectCompanyFilter);

  useEffect(() => {
    axios.get(`${LINK}/companies`).then(res => {
      setCompanies(res.data);
    });
  }, []);

  const changeFilterStatus = company => {
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
        <CompanyList>
          {filterName === 'Brands' &&
            companies
              .filter(
                ({ name }) =>
                  name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
              )
              .map(company => {
                return (
                  <Company
                    key={company.slug}
                    selected={companyFilter.indexOf(company.slug) !== -1}
                  >
                    <i
                      className={
                        companyFilter.indexOf(company.slug) !== -1
                          ? 'ri-checkbox-fill'
                          : 'ri-checkbox-blank-fill'
                      }
                      onClick={() => {
                        changeFilterStatus(company.slug);
                      }}
                    />
                    <label>{company.name}</label>
                    <br />
                  </Company>
                );
              })}
        </CompanyList>
      </FilterBox>
    </FilterWrapper>
  );
};
