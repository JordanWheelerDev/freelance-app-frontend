import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import PrimaryButtonSmall from '../common/Buttons/PrimaryButtonSmall';
import ReactFlagsSelect from 'react-flags-select';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      fullName,
      email,
      password,
      country: selectedCountry,
    };

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Registration successful
      setSuccess('Registration successful. Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 3000);

      setFullName('');
      setEmail('');
      setPassword('');
      setSelectedCountry('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Card className="fl-card rounded-0">
      <Card.Body>
        <div className="text-center fl-heading-text-xl mb-3">Register</div>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            {error && <div className="alert alert-danger mb-4">{error}</div>}
            {success && <div className="success-alert mb-4">{success}</div>}
            <Form onSubmit={handleRegister}>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="fl-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="fl-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="fl-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                  <ReactFlagsSelect
                    selected={selectedCountry}
                    onSelect={(code) => setSelectedCountry(code)}
                    placeholder="Select your country"
                    className="w-100"
                  />
                </Form.Group>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="I have read and agree to the terms and conditions, privacy and cookie policy."
                  required
                />
              </div>
              <div className="mb-3">
                <PrimaryButtonSmall
                  text="Register"
                  id="register-button"
                  fullWidth={true}
                />
              </div>
              <div className="mb-3 text-center">
                <hr />
              </div>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RegisterForm;
