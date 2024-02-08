import React from 'react';
import { Container } from 'react-bootstrap';
import WeatherCard from './WeatherCard.jsx';
import WeatherSoon from './WeatherSoon.jsx';

const CurrentWeather = () => (
  <Container className="mt-2">
    <p className="text-center">Погода в Дюртюлях</p>
    <WeatherCard />
    <WeatherSoon />
  </Container>
);

export default CurrentWeather;
