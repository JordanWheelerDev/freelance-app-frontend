import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateJobPage from './pages/CreateJobPage';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-job" element={<CreateJobPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
    </Router>
  );
}

export default App;
