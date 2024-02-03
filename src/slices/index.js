import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './currentWeatherSlice.js';
import dataSliceReducer from './dataSlice.js';

export default configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    data: dataSliceReducer,
  },
});
