import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { formatDistanceToNow, parseISO, format } from 'date-fns';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);

  useEffect(() => {
    const fetchJobs = async (page) => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/listings?page=${page}&limit=${jobsPerPage}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs(currentPage);
  }, [currentPage, jobsPerPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const formatPostedTime = (dateString) => {
    const date = parseISO(dateString);
    const now = new Date();
    const timeDifference = now - date;

    if (timeDifference < 24 * 60 * 60 * 1000) {
      // If the date is within the last 24 hours, show relative time
      return `${formatDistanceToNow(date, { addSuffix: true })}`;
    } else {
      // Otherwise, show formatted date
      return format(date, 'MMMM d, yyyy');
    }
  };

  return (
    <>
      {jobs.length === 0 ? (
        <div className="text-center">No jobs to display</div>
      ) : (
        jobs.map((job) => (
          <Row key={job.id}>
            <Col>
              <div className="job-list-container">
                <div className="d-flex justify-content-between">
                  <div className="job-list-date">
                    Posted {formatPostedTime(job.posted_on)}
                  </div>
                  <div className="job-list-report">Report</div>
                </div>
                <div className="mb-2">
                  <Link
                    to={`/job/${job.id}`}
                    className="job-list-title no-decoration"
                  >
                    {job.title}
                  </Link>
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  <div className="job-pay-details">
                    {job.pay_type === 'Per Project' && (
                      <span>
                        Per Project: $
                        {new Intl.NumberFormat().format(job.budget)}.00 budget
                      </span>
                    )}
                    {job.pay_type === 'Hourly' && (
                      <span>
                        Hourly: from $
                        {new Intl.NumberFormat().format(job.min_pay)}/hr to $
                        {new Intl.NumberFormat().format(job.max_pay)}/hr.
                      </span>
                    )}
                  </div>
                </div>
                <div className="job-list-description">
                  {job.description
                    ? DOMPurify.sanitize(
                        job.description
                          .replace(/<\/?p>/g, '')
                          .replace(/<\/?br>/g, ' ')
                          .replace(/<\/?strong>/g, '')
                          .replace(/<\/?em>/g, '')
                          .replace(/<\/?ul>/g, '')
                          .replace(/<\/?ol>/g, '')
                          .replace(/<\/?li>/g, '')
                          .replace(/<\/?span>/g, '')
                          .replace(/<\/?i>/g, '')
                          .replace(/<\/?a>/g, '')
                      ).substring(0, 250)
                    : ''}
                  ...
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
        ))
      )}
      {jobs.length > 0 && (
        <div className="text-center mb-5">
          <button
            className="fl-button-primary"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button onClick={nextPage} className="fl-button-primary">
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default JobList;
