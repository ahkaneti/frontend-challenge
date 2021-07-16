/* eslint-disable no-fallthrough */
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
  const [activePages, setActivePages] = useState([]);
  const [selectedType, setSelectedType] = useState('mug');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbLink, setDbLink] = useState(
    `${LINK}/items?_sort=price&_order=desc&_page=${page}&_limit=16`
  );

  const companyFilter = useSelector(selectCompanyFilter);

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
    let pages = [];
    // switch (page) {
    //   case page <= 4:

    //     break;
    //   case page >= totalPage - 3:
    //     break;
    //   default:
    //     if (page > 4) {
    //       pages.push(1, 2, '...');
    //     }
    //     pages.push(page - 1, page, page + 1);
    //     if (page < totalPage - 3) {
    //       pages.push('...', totalPage - 1, totalPage);
    //     }
    //     break;
    // }

    if (totalPage < 7) {
      pages = [...Array(totalPage + 1).keys()].splice(1);
    } else {
      pages.push(1, 2);
      switch (page) {
        case 4:
          pages.push(page - 1);
        case 3:
          pages.push(page);
        case 2:
          pages.push(page + 1, '...');
          break;
        case totalPage - 3:
          pages.push('...', page - 1, page, page + 1);
          break;
        case totalPage - 2:
          pages.push('...', page - 1, page);
          break;
        case totalPage - 1:
          pages.push('...', page - 1);
          break;
        case 1:
        case totalPage:
          pages.push('...');
          break;
        default:
          pages.push('...', page - 1, page, page + 1, '...');
      }
      pages.push(totalPage - 1, totalPage);
    }
    setActivePages(pages);
  }, [page, totalPage]);

  useEffect(() => {
    setPage(1);
  }, [totalPage]);

  useEffect(() => {
    console.log(dbLink);
    axios.get(dbLink).then(res => {
      setLoading(false);
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
        {loading ? (
          <i className="ri-refresh-line" />
        ) : (
          items.map(item => {
            return <ProductItem item={item} key={item.name + item.added} />;
          })
        )}
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
        {activePages.map((activePage, i) => {
          return (
            <NumberButton
              key={i}
              dots={activePage === '...'}
              selected={page === activePage}
              onClick={() => {
                if (activePage !== '...') {
                  setPage(activePage);
                }
              }}
            >
              {activePage}
            </NumberButton>
          );
        })}

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
