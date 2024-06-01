import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import JobDetails from '../components/jobs/JobDetails';
// import ClientDetails from '../components/jobs/ClientDetails';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/job/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //   return <div>{job ? <JobDetails job={job} /> : <div>Job not found</div>}</div>;
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <JobDetails job={job} />
        </Col>
        {/* <Col md={4}>
          <ClientDetails job={job} />
        </Col> */}
      </Row>
    </Container>
  );
};

export default JobPage;
