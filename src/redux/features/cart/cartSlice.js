import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //add
    add(state, action) {
      console.log(`adding ${action.payload['name']}`);
      state.items.push(action.payload);
    },
    //remove
    remove(state, action) {
      state.items.splice(state.items.findIndex(i => i === action.payload));
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCart = state => state.cart.items;

export default cartSlice.reducer;
