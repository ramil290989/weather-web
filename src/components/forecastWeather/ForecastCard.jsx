import React from 'react';
import {
  Button,
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ForecastCard = () => {
  const navigate = useNavigate();
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
  const weatherIcon = `url('./weatherIcons/${icon}.svg')`;
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
      className="border border-primary-subtle rounded p-1 p-md-2 mx-auto shadow-sm"
    >
      <Row className="flex-column flex-md-row text-center text-md-start">
        <Col className="mb-2">
          <p className="mb-0">
            {forecastDate.toLocaleString('ru-RU', dateOptions)}
          </p>
          <p className="mb-0">
            {forecastDate.toLocaleString('ru-RU', weekdayOptions)}
          </p>
        </Col>
        <Col className="col-auto mb-2">
          <Button
            className="ms-2"
            variant="outline-info"
            size="sm"
            onClick={() => navigate('/')}
          >
            Подробный прогноз на сегодня
          </Button>
        </Col>
      </Row>
      <Row className="flex-column flex-md-row mx-auto">
        <Col
          className="text-center mb-2"
          style={{
            backgroundImage: weatherIcon,
            backgroundPositionX: '50%',
            backgroundPositionY: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="fs-1 mb-5">
            {tempReal.min}
            &deg;
            &hellip;
            &nbsp;
            {tempReal.max}
            &deg;
          </p>
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
      <Row xs="auto" className="flex-column flex-md-row align-content-center justify-content-around">
        <Col>
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
        <Col>
          <Image src="./icons/ic_humidity.svg" className="me-2" />
          {humidity}
          %
        </Col>
        <Col>
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
