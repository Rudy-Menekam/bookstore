import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'Book',
  initialState: {
    Books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.Books.push(action.payload);
    },
    removeBook: (state, action) => {
      // const bookId = action.payload;
      state.Books = state.Books.filter((book) => book.id !== action.payload);
    },
  },

});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
