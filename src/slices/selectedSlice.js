/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getWeather } from './currentWeatherSlice.js';

const initialState = {
  data: null,
};

const selectedSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    showData: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        const weatherNow = payload[0];
        state.data = weatherNow;
      });
  },
});

export const { actions } = selectedSlice;
export default selectedSlice.reducer;
