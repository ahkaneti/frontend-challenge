import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { TopbarHolder, BagHolder } from './styles';

import { selectCart } from 'redux/features/cart/cartSlice';

export const Topbar = ({ shoppingList }) => {
  const [balance, setBalance] = useState(0);
  const cart = useSelector(selectCart);
  useEffect(() => {
    let result = 0;
    cart.map(i => {
      return (result += i.price);
    });
    result = Math.ceil(result * 100) / 100;
    setBalance(result);
  }, [cart]);
  return (
    <TopbarHolder>
      <h1>market</h1>
      <BagHolder>
        <i className="ri-shopping-bag-line" />
        <p>₺{balance}</p>
      </BagHolder>
    </TopbarHolder>
  );
};
