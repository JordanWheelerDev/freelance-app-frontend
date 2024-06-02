import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserProfile from '../components/profile/UserProfile';

const ProfilePage = () => {
  const { id } = useParams(); // Get the user ID from the route
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      console.log('Fetching profile data for user ID:', id);
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`, {
          method: 'GET',
          credentials: 'include', // Include credentials if needed
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched profile data:', data);
          setProfileData(data);
        } else {
          console.error('Failed to fetch profile data', response.status);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (!profileData) {
    return <div>User not found</div>; // Handle case where user is not found
  }

  return (
    <Container className="mt-5">
      <UserProfile profileData={profileData} />
    </Container>
  );
};

export default ProfilePage;
