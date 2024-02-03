/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    showData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { actions } = dataSlice;
export default dataSlice.reducer;
