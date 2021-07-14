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
      console.log(`adding ${action.payload['name']} `);
      state.items[action.payload['name']]
        ? (state.items[action.payload['name']][1] += 1)
        : (state.items[action.payload['name']] = [action.payload, 1]);
      state.totalPrice =
        Math.ceil((action.payload['price'] + state.totalPrice) * 100) / 100;
    },
    //remove
    remove(state, action) {
      state.items[action.payload['name']][1] === 1
        ? delete state.items[action.payload['name']]
        : (state.items[action.payload['name']][1] -= 1);
      state.totalPrice =
        Math.ceil((state.totalPrice - action.payload['price']) * 100) / 100;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCart = state => state.cart;

export default cartSlice.reducer;
