import { createSlice } from "@reduxjs/toolkit";

const fetchDataSlice = createSlice({
  name: "post",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchPostRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostRequest, fetchPostSuccess, fetchPostFailure } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
