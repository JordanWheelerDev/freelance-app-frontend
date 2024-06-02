import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useAuthentication from '../utilities/useAuthentication';
import FreelancerDashboard from '../components/dashboard/FreelancerDashboard';
import ClientDashboard from '../components/dashboard/ClientDashboard';

const DashboardPage = () => {
  const { isLoggedIn, userData } = useAuthentication(); // Destructure userData

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Container>
      {userData.account_type === 'freelancer' ? (
        <FreelancerDashboard userData={userData} />
      ) : (
        <ClientDashboard userData={userData} />
      )}
    </Container>
  );
};

export default DashboardPage;
