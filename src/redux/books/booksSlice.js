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
    removeItem: (state, action) => {
      const bookId = action.payload;
      state.Books = state.Books.filter((book) => book.id !== bookId);
    },
  },

});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
