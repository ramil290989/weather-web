import React from 'react';
import {
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';

const Loading = () => (
  <Container className="text-center mt-3">
    <Row>
      <Col>
        <Spinner animation="border" variant="primary" />
      </Col>
    </Row>
    <Row>
      <Col>
        <span className="fs-3">Загрузка данных, пожалуйста подождит</span>
      </Col>
    </Row>
  </Container>
);

export default Loading;
