import { configureStore } from '@reduxjs/toolkit';

import cartReducer from 'redux/features/cart/cartSlice';
import companyFilterReducer from 'redux/features/filters/companyFilterSlice';
import tagFilterReducer from 'redux/features/filters/tagFilterSlice';
import sortReducer from 'redux/features/sort/sortSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    companyFilters: companyFilterReducer,
    tagFilters: tagFilterReducer,
    sort: sortReducer,
  },
});
