import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterJobsSidebar from '../components/jobs/FilterJobs';
import JobList from '../components/jobs/JobList';

const JobPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}>
          <FilterJobsSidebar />
        </Col>
        <Col md={9}>
          <JobList />
        </Col>
      </Row>
    </Container>
  );
};

export default JobPage;
