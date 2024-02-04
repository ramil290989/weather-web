import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './currentWeatherSlice.js';
import selectedSliceReducer from './selectedSlice.js';

export default configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    selected: selectedSliceReducer,
  },
});
