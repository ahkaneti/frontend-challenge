import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //add
    add(state, action) {
      const { name, price } = action.payload;
      if (state.items[name]) {
        state.items[name][1] += 1;
      } else {
        state.items[name] = [action.payload, 1];
      }
      state.totalPrice = Math.floor((price + state.totalPrice) * 100) / 100;
    },
    //remove
    remove(state, action) {
      const { name, price } = action.payload;
      if (state.items[name][1] === 1) {
        delete state.items[name];
      } else {
        state.items[name][1] -= 1;
      }
      state.totalPrice = Math.max(
        Math.floor((state.totalPrice - price) * 100) / 100,
        0
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCart = state => state.cart;

export default cartSlice.reducer;
