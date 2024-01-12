import React from 'react';
import CurrentWeather from './CurrentWeather.jsx';
import WeatherThreeTime from './WeatherThreeTime.jsx';

const WeatherToday = () => (
  <div className='container mx-auto flex flex-col border-2'>
    <CurrentWeather />
    <WeatherThreeTime />
  </div>
);

export default WeatherToday;
