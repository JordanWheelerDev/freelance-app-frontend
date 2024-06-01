import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const CreateJobForm = () => {
  return (
    <Card className="fl-card rounded-0">
      <Card.Body>
        <div className="fl-heading-text-lg mb-3">Create Job</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              className="fl-input"
              placeholder="Job Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select className="fl-input" aria-label="Select job category">
              <option>Select Job Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Copywriting">Copywriting</option>
              <option value="Content Writing">Content Writing</option>
              <option value="SEO">SEO (Search Engine Optimization)</option>
              <option value="Social Media Marketing">
                Social Media Marketing
              </option>
              <option value="Video Editing">Video Editing</option>
              <option value="Photography">Photography</option>
              <option value="Illustration">Illustration</option>
              <option value="Animation">Animation</option>
              <option value="Virtual Assistance">Virtual Assistance</option>
              <option value="Project Management">Project Management</option>
              <option value="Accounting">Accounting</option>
              <option value="Legal Services">Legal Services</option>
              <option value="Translation">Translation</option>
              <option value="Transcription">Transcription</option>
              <option value="Voice Over">Voice Over</option>
              <option value="Data Entry">Data Entry</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Administrative Support">
                Administrative Support
              </option>
              <option value="Market Research">Market Research</option>
              <option value="Business Consulting">Business Consulting</option>
              <option value="Financial Consulting">Financial Consulting</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Software Testing">Software Testing</option>
              <option value="IT & Networking">IT & Networking</option>
              <option value="Database Administration">
                Database Administration
              </option>
              <option value="Game Development">Game Development</option>
              <option value="E-commerce Development">
                E-commerce Development
              </option>
              <option value="Blockchain Development">
                Blockchain Development
              </option>
              <option value="AR/VR Development">AR/VR Development</option>
              <option value="IoT (Internet of Things)">
                IoT (Internet of Things)
              </option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="DevOps">DevOps</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="System Administration">
                System Administration
              </option>
              <option value="UI Testing">UI Testing</option>
              <option value="Performance Testing">Performance Testing</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              as="textarea"
              className="fl-textarea"
              placeholder="Job Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select className="fl-input" aria-label="Select job length">
              <option>Select Job Length</option>
              <option value="Long Term">Long Term</option>
              <option value="Short Term">Short Term</option>
              <option value="Project-Based">Project-Based</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              className="fl-input"
              aria-label="Select experience level"
            >
              <option>Select Experience Level</option>
              <option value="Entry">Entry</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateJobForm;
