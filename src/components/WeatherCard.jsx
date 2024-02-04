import React from 'react';
import {
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const direction = [
    'Штиль',
    'Северный',
    'Северо-восточный',
    'Восточный',
    'Юго-восточный',
    'Южный',
    'Юго-западный',
    'Западный',
    'Северо-западный',
  ];
  const data = useSelector((state) => state.selected.data);
  const weatherIcon = `./weatherIcons/${data.icon}.svg`;
  const airTemp = data.temperature.air.C;
  const feelTemp = data.temperature.comfort.C;
  const description = data.description.full;
  const windSpeed = data.wind.speed.m_s;
  const windDirection = direction[data.wind.direction.scale_8];
  const humidity = data.humidity.percent;
  const pressure = data.pressure.mm_hg_atm;
  return (
    <Container>
      <Row>
        <Col>
          <Image src="./icons/ic_temp.svg" />
          {airTemp}
          Ощущается как
          {feelTemp}
          <Image src={weatherIcon} />
          {description}
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src="./icons/ic_wind.svg" />
          {windSpeed}
          м/с
          {windDirection}
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src="./icons/ic_humidity.svg" />
          {humidity}
          %
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src="./icons/ic_pressure.svg" />
          {pressure}
          мм рт.ст.
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherCard;
