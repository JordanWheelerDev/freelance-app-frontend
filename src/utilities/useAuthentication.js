import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/check-auth', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          const { message, userData } = await response.json();
          setIsLoggedIn(true);
          setUserData(userData);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigate('/login');
      }
    };

    checkLoginStatus();
  }, [navigate]);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setIsLoggedIn(false);
        setUserData(null);
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return { isLoggedIn, userData, logout }; // Return isLoggedIn, userData, and logout function
};

export default useAuthentication;
