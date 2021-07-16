import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  CartWrapper,
  ItemList,
  QuantityHandler,
  Item,
  InfoWrapper,
  ItemPrice,
  ItemName,
  TotalPrice,
} from './styles';

import { selectCart, add, remove } from 'redux/features/cart/cartSlice';

export const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <CartWrapper>
      <ItemList>
        {Object.keys(cart.items).map(item => {
          return (
            <Item key={item}>
              <InfoWrapper>
                <ItemName>{item}</ItemName>
                <ItemPrice>₺{cart.items[item][0]['price']}</ItemPrice>
              </InfoWrapper>
              <QuantityHandler>
                <button
                  onClick={() => {
                    dispatch(remove(cart.items[item][0]));
                  }}
                >
                  -
                </button>
                <p>{cart.items[item][1]}</p>
                <button
                  onClick={() => {
                    dispatch(add(cart.items[item][0]));
                  }}
                >
                  +
                </button>
              </QuantityHandler>
            </Item>
          );
        })}
      </ItemList>
      <TotalPrice>₺{cart.totalPrice}</TotalPrice>
    </CartWrapper>
  );
};
