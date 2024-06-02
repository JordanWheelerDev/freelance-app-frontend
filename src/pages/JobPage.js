import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import JobDetails from '../components/jobs/JobDetails';
import useAuthentication from '../utilities/useAuthentication';

const JobPage = () => {
  const { isLoggedIn } = useAuthentication();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initially set loading to false

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching data
        const response = await fetch(`http://localhost:5000/api/job/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };

    if (isLoggedIn) {
      fetchJobDetails();
    }
  }, [id, isLoggedIn]); // Include isLoggedIn in dependency array

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return null;
  }

  // If loading, display loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render job details once data is fetched
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <JobDetails job={job} />
        </Col>
      </Row>
    </Container>
  );
};

export default JobPage;
