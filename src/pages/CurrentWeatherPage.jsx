import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../slices/currentWeatherSlice.js';
import Loading from '../components/Loading.jsx';
import LoadingFailed from '../components/LoadingFailed.jsx';
import CurrentWeather from '../components/currentWeather/CurrentWeather.jsx';

const CurrentWeatherPage = () => {
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
      return <CurrentWeather />;
    default:
      return null;
  }
};

export default CurrentWeatherPage;
