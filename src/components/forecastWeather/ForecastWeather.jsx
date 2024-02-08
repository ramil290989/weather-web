import React from 'react';
import { Container } from 'react-bootstrap';
import ForecastCard from './ForecastCard.jsx';
import ForecastDays from './ForecastDays.jsx';

const ForecastWeather = () => (
  <Container className="mt-2">
    <p className="text-center">Прогноз погоды на 10 дней в Дюртюлях</p>
    <ForecastCard />
    <ForecastDays />
  </Container>
);

export default ForecastWeather;
