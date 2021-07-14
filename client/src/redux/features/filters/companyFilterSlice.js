import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const companyFilterSlice = createSlice({
  name: 'companyFilter',
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

export const { add, remove } = companyFilterSlice.actions;

export const selectCompanyFilter = state => state.companyFilters.items;

export default companyFilterSlice.reducer;
