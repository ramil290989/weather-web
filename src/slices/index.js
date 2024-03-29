import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './currentWeatherSlice.js';
import selectedSliceReducer from './selectedSlice.js';
import forecastWeatherReducer from './forecastWeatherSlice.js';

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    selected: selectedSliceReducer,
    forecastWeather: forecastWeatherReducer,
  },
});

export default store;
