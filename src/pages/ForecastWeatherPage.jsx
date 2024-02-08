import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecastWeather } from '../slices/forecastWeatherSlice.js';
import Loading from '../components/Loading.jsx';
import LoadingFailed from '../components/LoadingFailed.jsx';
import ForecastWeather from '../components/forecastWeather/ForecastWeather.jsx';

const ForecastWeatherPage = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.forecastWeather.loadingStatus);

  useEffect(() => {
    if (loadingStatus === 'loading') {
      dispatch(getForecastWeather());
    }
  });

  switch (loadingStatus) {
    case 'loading':
      return <Loading />;
    case 'failed':
      return <LoadingFailed />;
    case 'complete':
      return <ForecastWeather />;
    default:
      return null;
  }
};

export default ForecastWeatherPage;
