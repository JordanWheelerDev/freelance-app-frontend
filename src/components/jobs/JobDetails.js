import React from 'react';
import ProposalForm from './ProposalForm';
import { Col, Row } from 'react-bootstrap';
import DOMPurify from 'dompurify';

const JobDetails = ({ job }) => {
  const sanitizedDescription = DOMPurify.sanitize(job.description);
  return (
    <>
      <div className="mb-3 submit-proposal-title">Submit a proposal</div>
      <div className="job-section">
        <Row>
          <Col>
            <div className="mb-4 job-section-subheading">Job Details</div>
            <div className="job-page-title">{job.title}</div>
            <div className="d-flex justify-content-between mb-3">
              <div className="job-list-date">Posted: 1hr ago</div>
              <div className="job-list-report">Report</div>
            </div>
            <div className="mb-3">
              {job.pay_type === 'Hourly' && (
                <div className="job-list-pay-type">
                  This project is paying by the hour with a starting pay of
                  <span>
                    {' '}
                    ${new Intl.NumberFormat().format(job.min_pay)}.00
                  </span>
                  /hr, up to a max pay of
                  <span>
                    {' '}
                    ${new Intl.NumberFormat().format(job.max_pay)}.00
                  </span>
                  /hr.
                </div>
              )}
              {job.pay_type === 'Per Project' && (
                <div className="job-list-pay-type">
                  This project is paying by the project, with a budget of
                  <span> ${new Intl.NumberFormat().format(job.budget)}.00</span>
                  .
                </div>
              )}
            </div>
            <hr className="pretty-hr" />
            <div
              className="mb-3 job-list-description"
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            ></div>
            <hr className="pretty-hr" />
            <div className="job-list-skills">
              {job.skills.split(',').map((skill, index) => (
                <span key={index} className="job-list-skill">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <div className="job-section">
        <Row>
          <Col>
            <div className="mb-4 job-section-subheading">Proposal form</div>
            <ProposalForm jobId={job.id} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JobDetails;
