/* eslint-disable no-param-reassign */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { selectSoonWeather } from '../../slices/selectors.js';
import { actions as selectedActions } from '../../slices/selectedSlice.js';

const WeatherSoon = () => {
  const soonWeatherData = useSelector(selectSoonWeather);
  const dispatch = useDispatch();
  return (
    <Col xs={12} sm={10} md={9} lg={7} xl={6} xxl={5} className="p-0 mx-auto">
      <Row xs={2} className="gx-2 gy-2 mt-0">
        {soonWeatherData.map((weather) => {
          const {
            id,
            dateDescription,
            tempReal,
            icon,
          } = weather;
          const weatherIcon = `url('./weatherIcons/${icon}.svg')`;
          return (
            <Col key={id} xs={6} lg={3}>
              <Col
                className="border border-primary-subtle rounded h-100 text-center shadow-sm"
                style={{
                  backgroundImage: weatherIcon,
                  backgroundPositionX: '50%',
                  backgroundPositionY: '10%',
                  backgroundRepeat: 'no-repeat',
                }}
                onClick={() => dispatch(selectedActions.showData(weather))}
                onMouseEnter={({ currentTarget }) => {
                  currentTarget.style.transition = '0.2s';
                  currentTarget.classList.remove('shadow-sm');
                  currentTarget.classList.add('shadow');
                  currentTarget.classList.remove('border-primary-subtle');
                  currentTarget.classList.add('border-primary');
                }}
                onMouseLeave={({ currentTarget }) => {
                  currentTarget.classList.remove('shadow');
                  currentTarget.classList.add('shadow-sm');
                  currentTarget.classList.remove('border-primary');
                  currentTarget.classList.add('border-primary-subtle');
                }}
              >
                <p className="fs-3 mt-5 mb-0">
                  {tempReal}
                  &deg;
                </p>
                <p className="mb-1" style={{ fontSize: '12px' }}>{dateDescription}</p>
              </Col>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default WeatherSoon;
