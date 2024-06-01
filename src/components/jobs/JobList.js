import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/listings');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      {jobs.map((job) => (
        <Row key={job.id}>
          <Col>
            <div className="job-list-container">
              <div className="d-flex justify-content-between">
                <div className="job-list-date">Posted</div>
                <div className="job-list-report">Report</div>
              </div>
              <Link
                to={`/job/${job.id}`}
                className="job-list-title no-decoration"
              >
                {job.title}
              </Link>
              <div className="job-list-description">
                {job.description.substring(0, 250)}...
              </div>
              <div className="job-list-skills">
                {job.skills &&
                  job.skills.split(',').map((skill, index) => (
                    <span key={index} className="job-list-skill">
                      {skill.trim()}
                    </span>
                  ))}
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default JobList;
