import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { add } from 'redux/features/cart/cartSlice';

import {
  ProductItemWrapper,
  ProductImageWrapper,
  ProductName,
  ProductImage,
} from './styles';

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ProductItemWrapper>
      <ProductImageWrapper>
        <ProductImage />
      </ProductImageWrapper>
      <p>₺{item.price}</p>
      <ProductName>{item.name}</ProductName>
      <button
        onClick={() => {
          dispatch(add(item));
        }}
      >
        Add
      </button>
    </ProductItemWrapper>
  );
};
