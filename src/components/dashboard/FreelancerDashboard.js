import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FreelancerDashboard = ({ userData }) => {
  return (
    <Row>
      <div className="dashboard-title mb-4 mt-5 text-center">
        {userData.full_name}'s Freelancer Dashboard
      </div>
      <Col md={3}>
        <div className="dashboard-profile-details">
          <div className="dashboard-profile-image text-center">
            <img src="https://placehold.co/400" alt={userData.full_name} />
          </div>
          <div className="dashboard-profile-name text-center">
            {userData.full_name}
          </div>
        </div>
      </Col>
      <Col md={9}></Col>
    </Row>
  );
};

export default FreelancerDashboard;
