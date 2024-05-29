import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Col, Container, Row } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={5}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
