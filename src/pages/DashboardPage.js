// DashboardPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useAuthentication from '../utilities/useAuthentication';

const DashboardPage = () => {
  const { isLoggedIn, userData } = useAuthentication(); // Destructure userData

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome, {userData.full_name}</h1>
          <p>Email: {userData.email}</p>
          <h2>Dashboard Page</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
