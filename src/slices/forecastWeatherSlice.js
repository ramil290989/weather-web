/* eslint-disable no-param-reassign */

import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../utils/routes.js';
import normalizeForecastData from '../utils/normalizeForecastData.js';

export const getForecastWeather = createAsyncThunk(
  'loadingForecastWeather',
  async () => {
    const path = routes.getForecastWeather();
    const response = await axios.get(path);
    const normalizedData = normalizeForecastData(response.data);
    return normalizedData;
  },
);

const forecastWeatherAdapter = createEntityAdapter();

const initialState = forecastWeatherAdapter.getInitialState({
  loadingStatus: 'loading',
  selected: {},
  errors: null,
});

const forecastWeatherSlice = createSlice({
  name: 'forecastWeather',
  initialState,
  reducers: {
    selectData: (state, { payload }) => {
      state.selected = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getForecastWeather.pending, (state) => {
        state.loadingStatus = 'loading';
        state.errors = null;
      })
      .addCase(getForecastWeather.fulfilled, (state, { payload }) => {
        const firstItemIndex = 0;
        state.loadingStatus = 'complete';
        state.errors = null;
        forecastWeatherAdapter.addMany(state, payload);
        state.selected = payload[firstItemIndex];
      })
      .addCase(getForecastWeather.rejected, (state, { error }) => {
        state.loadingStatus = 'failed';
        state.errors = error.message;
      });
  },
});

export const selectors = forecastWeatherAdapter.getSelectors((state) => state.forecastWeather);
export const { actions } = forecastWeatherSlice;

export default forecastWeatherSlice.reducer;
