import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: () => 'Under Construction',
  },

});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
