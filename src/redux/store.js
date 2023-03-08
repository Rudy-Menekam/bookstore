import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './books/booksSlice';
import { categoriesSlice } from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    Book: bookSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
export default store;
