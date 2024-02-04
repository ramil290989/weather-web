import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeather } from './slices/currentWeatherSlice.js';
import Loading from './components/Loading.jsx';
import LoadingFailed from './components/LoadingFailed.jsx';
import WeatherCard from './components/WeatherCard.jsx';

const App = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.currentWeather.loadingStatus);

  useEffect(() => {
    if (loadingStatus === 'loading') {
      dispatch(getWeather());
    }
  });

  switch (loadingStatus) {
    case 'loading':
      return <Loading />;
    case 'failed':
      return <LoadingFailed />;
    case 'idle':
      return <WeatherCard />;
    default:
      return null;
  }
};

export default App;
