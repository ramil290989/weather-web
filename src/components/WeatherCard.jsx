import React from 'react';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const data = useSelector((state) => state.data);
};

export default WeatherCard;
