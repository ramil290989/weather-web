/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../utils/routes';
import normalizeCurrentData from '../utils/normalizeCurrentData';

export const getWeather = createAsyncThunk(
  'loadingWeather',
  async () => {
    const path = routes.getWeather();
    const response = await axios.get(path);
    const normalizedData = normalizeCurrentData(response.data);
    return normalizedData;
  },
);

const currentWeatherAdapter = createEntityAdapter();

const initialState = currentWeatherAdapter.getInitialState({
  loadingStatus: 'loading',
  errors: null,
});

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    resetData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loadingStatus = 'loading';
        state.errors = null;
      })
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        currentWeatherAdapter.addMany(state, payload);
        state.loadingStatus = 'idle';
        state.errors = null;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.errors = action.error.message;
      });
  },
});

export const selectors = currentWeatherAdapter.getSelectors((state) => state.currentWeather);
export const { actions } = currentWeatherSlice;

export default currentWeatherSlice.reducer;
