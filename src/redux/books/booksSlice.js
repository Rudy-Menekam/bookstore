import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'Book',
  numberOfBooks: '3',
  initialState: {
    Books:
    [
      {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        item_id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        item_id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.Books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.Books = state.Books.filter((book) => book.item_id !== action.payload);
    },
  },

});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
