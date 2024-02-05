import React from 'react';
import { Container } from 'react-bootstrap';
import WeatherCard from '../components/WeatherCard.jsx';

const Weather = () => (
  <Container className="mt-2">
    <p className="text-center">Погода в Дюртюлях</p>
    <WeatherCard />
  </Container>
);

export default Weather;
