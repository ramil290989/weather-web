import React from 'react';
import {
  Button,
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectNowWeather } from '../../slices/selectors.js';
import { actions as selectedActions } from '../../slices/selectedSlice.js';

const WeatherCard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selected.data);
  const dataNow = useSelector(selectNowWeather);
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
            {date.toLocaleString('ru-RU', options)}
          </p>
          <p className="mb-0">
            {dateDescription}
          </p>
        </Col>
        <Col className="col-auto">
          {
            dateDescription === 'сейчас'
              ? null
              : (
                <Button
                  variant="outline-info"
                  size="sm"
                  onClick={() => dispatch(selectedActions.showData(dataNow))}
                >
                  Погода сейчас
                </Button>
              )
          }
        </Col>
      </Row>
      <Row className="flex-column flex-md-row">
        <Col md={4} className="text-center text-md-start">
          <span className="fs-1">
            {tempReal}
            &deg;
          </span>
          <Image src={weatherIcon} className="ms-2" />
        </Col>
        <Col className="text-center text-md-start">
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
      <Row xs="auto" sm={3} className="flex-column flex-sm-row text-sm-center align-content-center">
        <Col sm={4}>
          <Image src="./icons/ic_wind.svg" className="me-2" />
          {windSpeed}
          &nbsp;
          м/с
          &nbsp;
          {windDirection}
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

export default WeatherCard;
