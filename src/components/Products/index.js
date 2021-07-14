import React, { useState, useEffect } from 'react';

import {
  ProductsWrapper,
  ItemTypeFilter,
  ItemTypeFilterButton,
  ProductGrid,
  ButtonWrapper,
  DirectionButton,
  NumberButton,
} from './styles';

import { SORT_MODES } from 'tokens/sort';
import { LINK } from 'tokens/backend';

//Suanlik datayi burda cekiyorum ama belki baska bir yere koymak daha mantiklidir?
import { selectCompanyFilter } from 'redux/features/filters/companyFilterSlice';
import { selectSort } from 'redux/features/sort/sortSlice';

import { useSelector } from 'react-redux';

//Items'dan kucuk bir parca alarak test yapildi, calistiktan sonra stylinge gecildi.
//Dosyalarin cekilmesi icin axios
import axios from 'axios';

import { ProductItem } from 'components/ProductItem';

export const Products = () => {
  const [selectedType, setSelectedType] = useState('mug');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [items, setItems] = useState([]);
  const companyFilter = useSelector(selectCompanyFilter);
  const [dbLink, setDbLink] = useState(
    `${LINK}/items?_sort=price&_order=desc&_page=${page}&_limit=16`
  );
  const sort = useSelector(selectSort);
  useEffect(() => {
    let link = ``;
    switch (sort) {
      case SORT_MODES.LOW_TO_HIGH:
        link = `${LINK}/items?_sort=price&_order=asc&_page=${page}&_limit=16`;
        break;
      case SORT_MODES.HIGH_TO_LOW:
        link = `${LINK}/items?_sort=price&_order=desc&_page=${page}&_limit=16`;
        break;
      case SORT_MODES.NEW_TO_OLD:
        link = `${LINK}/items?_sort=added&_order=desc&_page=${page}&_limit=16`;
        break;
      case SORT_MODES.OLD_TO_NEW:
        link = `${LINK}/items?_sort=added&_order=asc&_page=${page}&_limit=16`;
        break;
      default:
        console.log(`Not supposed to come here, sort: ${sort}`);
    }
    selectedType === 'mug'
      ? (link += `&itemType=mug`)
      : (link += `&itemType=shirt`);
    companyFilter.map(company => {
      return (link += `&manufacturer=${company}`);
    });
    console.log(link);
    setDbLink(link);
  }, [sort, page, selectedType, companyFilter]);

  useEffect(() => {
    axios.get(dbLink).then(res => {
      setTotalPage(Math.ceil(res.headers['x-total-count'] / 16));
      if (res.data.length > 0) setItems(res.data);
    });
  }, [dbLink]);

  return (
    <ProductsWrapper>
      <h2>Products</h2>
      <ItemTypeFilter>
        <ItemTypeFilterButton
          selected={selectedType === 'mug'}
          onClick={() => setSelectedType('mug')}
        >
          mug
        </ItemTypeFilterButton>
        <ItemTypeFilterButton
          selected={selectedType === 'shirt'}
          onClick={() => setSelectedType('shirt')}
        >
          shirt
        </ItemTypeFilterButton>
      </ItemTypeFilter>
      <ProductGrid>
        {items.map(item => {
          return <ProductItem item={item} key={item.name + item.added} />;
        })}
      </ProductGrid>
      <ButtonWrapper>
        <DirectionButton
          onClick={() => {
            setPage(prev => Math.max(prev - 1, 1));
          }}
        >
          <i className="ri-arrow-left-line" />
          <p>Prev</p>
        </DirectionButton>
        {/* {
          [...Array(totalPage)].map((page, i) => {
            return <NumberButton key={page}>{i}</NumberButton>;
          })
        } */}
        <NumberButton
          selected={page === 1}
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </NumberButton>
        <NumberButton
          selected={page === 2}
          onClick={() => {
            setPage(2);
          }}
        >
          2
        </NumberButton>
        <DirectionButton
          onClick={() => {
            setPage(prev => Math.min(prev + 1, totalPage));
          }}
        >
          <p>Next</p>
          <i className="ri-arrow-right-line" />
        </DirectionButton>
      </ButtonWrapper>
    </ProductsWrapper>
  );
};
