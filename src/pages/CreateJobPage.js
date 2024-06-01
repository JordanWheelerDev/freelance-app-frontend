import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreateJobFormSteps from '../components/jobs/CreateJobFormSteps';

const CreateJobPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <CreateJobFormSteps />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateJobPage;
