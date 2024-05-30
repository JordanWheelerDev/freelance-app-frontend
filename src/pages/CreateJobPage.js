import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreateJobForm from '../components/jobs/CreateJobForm';
import CreateJobPageSidebar from '../components/jobs/JobPageSidebar';

const CreateJobPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <CreateJobForm />
        </Col>
        <Col md={4}>
          <CreateJobPageSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateJobPage;
