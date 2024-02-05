import React from 'react';
import {
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const data = useSelector((state) => state.selected.data);
  const {
    dateDescription,
    dateLocal,
    tempReal,
    tempFeel,
    icon,
    weatherDescription,
    windSpeed,
    windDirection,
    humidity,
    pressure,
  } = data;
  const weatherIcon = `./weatherIcons/${icon}.svg`;
  const date = new Date(dateLocal);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Col xs={12}>
      <p className="mb-0">
        {date.toLocaleString('ru-RU', options)}
      </p>
      <p>
        {dateDescription}
      </p>
      <Row className="flex-column">
        <Col>
          <Row>
            <Col>
              <Image src="./icons/ic_temp.svg" />
            </Col>
            <span className="fs-1">
              {tempReal}
              &deg;
            </span>
            <Image src={weatherIcon} />
          </Row>
        </Col>
        <Col>
          <p className="mb-0">
            {weatherDescription}
          </p>
          <p>
            Ощущается как
            &nbsp;
            {tempFeel}
            &deg;
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Image src="./icons/ic_wind.svg" className="me-2" />
          {windSpeed}
          м/с
          {windDirection}
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

export default WeatherCard;
