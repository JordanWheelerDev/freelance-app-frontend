import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import PrimaryButtonSmall from '../common/Buttons/PrimaryButtonSmall';

function LoginForm() {
  return (
    <Card className="fl-card rounded-0">
      <Card.Body>
        <div className="text-center fl-heading-text-xl mb-3">Login</div>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <Form>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="password" placeholder="Enter password" />
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
