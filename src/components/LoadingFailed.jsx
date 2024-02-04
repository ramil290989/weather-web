import React from 'react';
import {
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const LoadingFailed = () => {
  const error = useSelector((state) => state.currentWeather.errors);
  return (
    <Container className="text-center mt-3">
      <Row>
        <Col>
          <Spinner animation="grow" variant="danger" />
        </Col>
      </Row>
      <Row>
        <Col>
          <span className="fs-3">{error}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default LoadingFailed;
