import React from 'react';
import Card from 'react-bootstrap/Card';

const CreateJobPageSidebar = () => {
  return (
    <Card className="fl-card rounded-0">
      <Card.Body>
        <div className="text-center fl-heading-text-med mb-3">Hints</div>
        <div className="mb-3">
          <ul>
            <li>
              <b>Job Title</b>: be descriptive and specific while maintaining
              120 characters or less.
            </li>
            <li>
              <b>Job Category</b>: select the category that best fits your
              project.
            </li>
            <li>
              <b>Job Description</b>: this is where you can go into further
              detail about your project and what you are looking for in a
              freelancer.
            </li>
            <li>
              <b>Job Length</b>
              <ul>
                <li>
                  <b>Long Term</b>: this is an ongoing, complex project that
                  will take a long time to complete.
                </li>
                <li>
                  <b>Short Term</b>: this project is not expected to take long.
                </li>
                <li>
                  <b>Project-Based</b>: this is a one-off project.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CreateJobPageSidebar;
