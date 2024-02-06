import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './currentWeatherSlice.js';
import selectedSliceReducer from './selectedSlice.js';

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    selected: selectedSliceReducer,
  },
});

export default store;
