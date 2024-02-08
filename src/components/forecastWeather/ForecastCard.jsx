import React from 'react';
import {
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ForecastCard = () => {
  const data = useSelector((state) => state.forecastWeather.selected);
  const {
    // id,
    date,
    description,
    humidity,
    pressure,
    icon,
    tempReal,
    tempFeel,
    wind: { direction, speed },
  } = data;
  const weatherIcon = `./weatherIcons/${icon}.svg`;
  const forecastDate = new Date(date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const weekdayOptions = { weekday: 'long' };
  return (
    <Col
      xs={12}
      sm={10}
      md={9}
      lg={7}
      xl={6}
      xxl={5}
      className="border border-primary-subtle rounded p-1 p-md-3 mx-auto shadow-sm"
    >
      <Row>
        <Col>
          <p className="mb-0">
            {forecastDate.toLocaleString('ru-RU', dateOptions)}
          </p>
          <p className="mb-0">
            {forecastDate.toLocaleString('ru-RU', weekdayOptions)}
          </p>
        </Col>
        <Col className="col-auto" />
      </Row>
      <Row className="flex-column flex-md-row">
        <Col md={4} className="text-center text-md-start">
          <span className="fs-1">
            {tempReal.min}
            &deg;
            &hellip;
            &nbsp;
            {tempReal.max}
            &deg;
          </span>
          <Image src={weatherIcon} className="ms-2" />
        </Col>
        <Col className="text-center text-md-start">
          <p className="mb-0">
            {description}
          </p>
          <p>
            Ощущается как
            &nbsp;
            {tempFeel.min}
            &deg;
            &hellip;
            &nbsp;
            {tempFeel.max}
            &deg;
          </p>
        </Col>
      </Row>
      <Row xs="auto" sm={3} className="flex-column flex-sm-row text-sm-center align-content-center">
        <Col sm={4}>
          <Image src="./icons/ic_wind.svg" className="me-2" />
          {speed.min}
          &ndash;
          {speed.max}
          &nbsp;
          м/с
          &nbsp;
          {direction.min}
          &ndash;
          {direction.max}
        </Col>
        <Col sm={3}>
          <Image src="./icons/ic_humidity.svg" className="me-2" />
          {humidity}
          %
        </Col>
        <Col sm={5}>
          <Image src="./icons/ic_pressure.svg" className="me-2" />
          {pressure}
          &nbsp;
          мм рт.ст.
        </Col>
      </Row>
    </Col>
  );
};

export default ForecastCard;
