import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Price low to high',
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
