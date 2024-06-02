import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import PrimaryButtonSmall from '../common/Buttons/PrimaryButtonSmall';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const { token } = await response.json();
      localStorage.setItem('token', token); // Store the token in local storage
      navigate('/dashboard');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Card className="fl-card rounded-0">
      <Card.Body>
        <div className="text-center fl-heading-text-xl mb-3">Login</div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <Form onSubmit={handleLogin}>
              <div className="mb-3">
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
              </div>
              <div className="mb-3">
                <PrimaryButtonSmall
                  text="Login"
                  id="login-button"
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

export default LoginForm;
