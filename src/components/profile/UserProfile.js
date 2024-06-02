import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserProfile = ({ profileData }) => {
  const user = profileData.user; // Assuming profileData contains user and contracts
  const contracts = profileData.contracts;

  // Calculate total amount earned and number of completed contracts
  const completedContracts = contracts.filter(
    (contract) => contract.completed === 'yes'
  );
  const totalAmount = completedContracts.reduce(
    (acc, contract) => acc + parseFloat(contract.amount),
    0
  );
  const completedContractsCount = completedContracts.length;

  const personalSkills = user.personal_skills.split(',');

  return (
    <Row>
      <Col md={3}>
        <div className="profile-sidebar mb-3">
          <div className="profile-user-picture mb-4 text-center">
            <img src="https://placehold.co/400" alt={user.full_name} />
          </div>
          <div className="profile-user-name text-center">{user.full_name}</div>
          <div className="profile-user-location">
            <FontAwesomeIcon icon={faMapPin} /> {user.country}
          </div>
          <div className="profile-user-name">{user.full_name}</div>
        </div>
        <div className="profile-earnings-sidebar">
          <div className="d-flex justify-content-between earning-details mb-3">
            <div>Total Earnings</div>
            <div className="fw-bold">${totalAmount.toLocaleString()}+</div>
          </div>
          <div className="d-flex justify-content-between earning-details">
            <div>Total Contracts</div>
            <div className="fw-bold">{completedContractsCount}</div>
          </div>
          {/* Possible future feature
          
          <div className="d-flex justify-content-between earning-details mb-3">
            <div>Total Hours</div>
            <div>{completedContractsCount}</div>
          </div> */}
        </div>
        <div className="profile-skills-sidebar">
          <div className="profile-skills-heading mb-3">Skills</div>
          {personalSkills.map((skill, index) => (
            <div key={index} className="job-list-skill">
              {skill}
            </div>
          ))}
        </div>
        {/*
        {completedContracts.map((contract, index) => (
          <div key={index}>
            <p>Contract To: {contract.contract_to}</p>
            <p>Contract From: {contract.contract_from}</p>
            <p>Amount: ${parseFloat(contract.amount).toLocaleString()}</p>
          </div>
        ))} */}
      </Col>
      <Col md={9}>
        <div className="profile-about-user"></div>
      </Col>
    </Row>
  );
};

export default UserProfile;
