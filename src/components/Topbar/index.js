import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { TopbarHolder, BagHolder, TopbarWrapper, CartHolder } from './styles';

import { Cart } from 'components/Cart';

import { SHOPPING_BAG } from 'tokens/icons';

import { selectCart } from 'redux/features/cart/cartSlice';

export const Topbar = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const cart = useSelector(selectCart);

  return (
    <TopbarWrapper>
      <TopbarHolder>
        <h1>market</h1>
        <BagHolder onClick={() => setDisplayCart(prev => !prev)}>
          <i className={SHOPPING_BAG} />
          <p>₺{cart.totalPrice}</p>
        </BagHolder>
      </TopbarHolder>
      {displayCart && (
        <CartHolder>
          <Cart />
        </CartHolder>
      )}
    </TopbarWrapper>
  );
};
