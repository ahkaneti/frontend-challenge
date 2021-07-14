import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const tagFilterSlice = createSlice({
  name: 'tagFilter',
  initialState,
  reducers: {
    //add
    add(state, action) {
      state.items.push(action.payload);
    },
    //remove
    remove(state, action) {
      state.items.splice(state.items.findIndex(i => i === action.payload));
    },
  },
});

export const { add, remove } = tagFilterSlice.actions;

export const selectTagFilter = state => state.tagFilters.items;

export default tagFilterSlice.reducer;
