import React from 'react';
import CurrentWeather from './CurrentWeather.jsx';
import WeatherThreeTime from './WeatherThreeTime.jsx';

const WeatherToday = () => (
  <div className='max-w-md flex flex-col mx-auto'>
    <CurrentWeather />
    <WeatherThreeTime />
  </div>
);

export default WeatherToday;
