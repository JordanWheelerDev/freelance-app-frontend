import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import PrimaryButtonSmall from '../common/Buttons/PrimaryButtonSmall';
import ReactFlagsSelect from 'react-flags-select';

function RegisterForm() {
  const [selectedCountry, setSelectedCountry] = useState('');
  return (
    <Card className="fl-card rounded-0">
      <Card.Body>
        <div className="text-center fl-heading-text-xl mb-3">Register</div>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <Form>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="email" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <ReactFlagsSelect
                    selected={selectedCountry}
                    onSelect={(code) => setSelectedCountry(code)}
                  />
                </Form.Group>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="I have read and agree to the terms and conditions, privacy and cookie policy."
                />
              </div>
              <div className="mb-3">
                <PrimaryButtonSmall
                  text="Register"
                  id="reigster-button"
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
