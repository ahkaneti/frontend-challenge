import React from 'react';

import { useSelector } from 'react-redux';

import { TopbarHolder, BagHolder, TopbarWrapper, CartHolder } from './styles';

import { Cart } from 'components/Cart';

import { selectCart } from 'redux/features/cart/cartSlice';

export const Topbar = () => {
  const cart = useSelector(selectCart);
  return (
    <TopbarWrapper>
      <TopbarHolder>
        <h1>market</h1>
        <BagHolder>
          <i className="ri-shopping-bag-line" />
          <p>₺{cart.totalPrice}</p>
        </BagHolder>
      </TopbarHolder>
      <CartHolder>
        <Cart />
      </CartHolder>
    </TopbarWrapper>
  );
};
