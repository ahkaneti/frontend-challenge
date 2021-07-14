import { createSlice } from '@reduxjs/toolkit';

import { SORT_MODES } from 'tokens/sort';

const initialState = {
  value: SORT_MODES.LOW_TO_HIGH,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    //edit
    edit(state, action) {
      console.log(`Changing sort to ${action.payload}`);
      state.value = action.payload;
    },
  },
});

export const { edit } = sortSlice.actions;

export const selectSort = state => state.sort.value;

export default sortSlice.reducer;
