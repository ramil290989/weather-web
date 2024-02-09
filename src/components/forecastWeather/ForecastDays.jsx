/* eslint-disable no-param-reassign */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { selectors as forecastSelectors, actions as forecastActions } from '../../slices/forecastWeatherSlice.js';

const ForecastDays = () => {
  const forecastWeatherData = useSelector(forecastSelectors.selectAll);
  const dispatch = useDispatch();
  return (
    <Col xs={12} sm={10} md={9} lg={7} xl={6} xxl={5} className="p-0 mx-auto">
      <Row xs={2} md={5} className="gx-2 gy-2 mt-0">
        {forecastWeatherData.map((weather) => {
          const {
            id,
            date,
            tempReal,
            icon,
          } = weather;
          const dateOptions = {
            month: 'long',
            day: 'numeric',
          };
          const weekdayOptions = { weekday: 'long' };
          const forecastDate = new Date(date);
          const weatherIcon = `url('./weatherIcons/${icon}.svg')`;
          return (
            <Col key={id}>
              <Col
                className="border border-primary-subtle rounded h-100 text-center shadow-sm pt-1"
                style={{
                  backgroundImage: weatherIcon,
                  backgroundPositionX: '50%',
                  backgroundPositionY: '5%',
                  backgroundRepeat: 'no-repeat',
                }}
                onClick={() => dispatch(forecastActions.selectData(weather))}
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
                <p className="fs-3 mb-0 mt-5">{tempReal.avg}</p>
                <p className="mb-0" style={{ fontSize: '12px' }}>{forecastDate.toLocaleString('ru-RU', dateOptions)}</p>
                <p className="mb-1" style={{ fontSize: '12px' }}>{forecastDate.toLocaleString('ru-RU', weekdayOptions)}</p>
              </Col>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default ForecastDays;
