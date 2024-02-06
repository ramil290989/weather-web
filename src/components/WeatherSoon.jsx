import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { selectSoonWeather } from '../slices/selectors.js';

const WeatherSoon = () => {
  const soonWeatherData = useSelector(selectSoonWeather);
  return (
    <Col xs={12} sm={10} md={9} lg={7} xl={6} xxl={5} className="p-0 mx-auto">
      <Row xs={2} className="gap-2">
        {soonWeatherData.map((weather) => {
          const {
            id,
            dateDescription,
            // dateLocal,
            // tempReal,
            // tempFeel,
            // icon,
            // weatherDescription,
            // windSpeed,
            // windDirection,
            // humidity,
            // pressure,
          } = weather;
          return (
            <Col key={id} xs="auto" className="border">
              {dateDescription}
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default WeatherSoon;
