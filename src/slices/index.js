import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './currentWeatherSlice.js';

export default configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  },
});
