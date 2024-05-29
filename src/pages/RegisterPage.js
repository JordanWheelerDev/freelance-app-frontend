import React, { useState } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { Col, Container, Row } from 'react-bootstrap';

const RegisterPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={5}>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
