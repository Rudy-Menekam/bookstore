import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XbS86wRRQyh8wlRxSdM0/books';

export const getBook = createAsyncThunk('Books/getBook', async () => {
  const res = await fetch(url);
  const data = await res.json();
  const books = [
    Object.keys(data).map((key) => ({
      item_id: key,
      ...data[key][0],
    })),
  ];
  return books;
});

export const addBook = createAsyncThunk('Book/addBook', async (Book) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(Book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Book;
});

export const removeBook = createAsyncThunk('removeBook', async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

export const bookSlice = createSlice({
  name: 'Book',
  initialState: {
    Books: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBook.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload[0];
      updatedState.Books = newStore;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      const item = action.payload;
      state.Books.push(item);
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      const id = action.payload;
      const newState = { ...state };
      newState.Books = state.Books.filter((book) => book.item_id !== id);
      return newState;
    });
  },

});
export default bookSlice.reducer;
