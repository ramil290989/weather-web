import React from 'react';
import {
  Button,
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectNowWeather } from '../../slices/selectors.js';
import { actions as selectedActions } from '../../slices/selectedSlice.js';

const WeatherCard = () => {
  const navigate = useNavigate();
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
  const weatherIcon = `url('./weatherIcons/${icon}.svg')`;
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
      className="border border-primary-subtle rounded p-1 p-md-2 mx-auto shadow-sm"
    >
      <Row className="flex-column flex-md-row mx-auto text-center text-md-start">
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
                  className="m-1"
                  variant="outline-info"
                  size="sm"
                  onClick={() => dispatch(selectedActions.showData(dataNow))}
                >
                  Погода сейчас
                </Button>
              )
          }
          <Button
            className="m-1 d-block d-md-inline mx-auto"
            variant="outline-info"
            size="sm"
            onClick={() => navigate('/forecast')}
          >
            Прогноз на 10 дней
          </Button>
        </Col>
      </Row>
      <Row className="flex-column flex-md-row">
        <Col
          md={4}
          className="text-center"
          style={{
            backgroundImage: weatherIcon,
            backgroundPositionX: '50%',
            backgroundPositionY: '90%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="fs-1 mb-5">
            {tempReal}
            &deg;
          </p>
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
