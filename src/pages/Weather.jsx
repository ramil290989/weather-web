import React from 'react';
import { Container } from 'react-bootstrap';
import WeatherCard from '../components/WeatherCard.jsx';
import WeatherSoon from '../components/WeatherSoon.jsx';

const Weather = () => (
  <Container className="mt-2">
    <p className="text-center">Погода в Дюртюлях</p>
    <WeatherCard />
    <WeatherSoon />
  </Container>
);

export default Weather;
