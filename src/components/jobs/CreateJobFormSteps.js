import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Select from 'react-select';

const Step1 = ({ onNext, initialData }) => {
  const [title, setTitle] = useState(initialData.title || '');

  const handleNext = () => {
    onNext({ title });
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col md={6}>
        <div className="job-form-steps-heading mb-3">
          Start by creating a job title.
        </div>
        <div className="job-form-steps-subheading mb-3">
          This is the first thing potential freelancers will see, so be as
          descriptive as possible.
        </div>
      </Col>
      <Col md={6}>
        <Form.Control
          type="text"
          value={title}
          className="fl-input mb-4"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="fl-button-primary-small" onClick={handleNext}>
          Next
        </button>
      </Col>
    </Row>
  );
};

const Step2 = ({ onNext, onBack, initialData }) => {
  const [description, setDescription] = useState(initialData.description || '');

  const handleNext = () => {
    onNext({ description });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col md={6}>
        <div className="job-form-steps-heading mb-3">
          Now enter your project details.
        </div>
        <div className="job-form-steps-subheading mb-3">
          Now you can be even more descriptive. Explain what the project is
          about and what you need from the freelancer.
        </div>
      </Col>
      <Col md={6}>
        <Form.Control
          as="textarea"
          value={description}
          className="fl-textarea mb-4"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="d-flex justify-content-between">
          <button className="fl-button-primary-small" onClick={handleBack}>
            Back
          </button>
          <button className="fl-button-primary-small" onClick={handleNext}>
            Next
          </button>
        </div>
      </Col>
    </Row>
  );
};

const Step3 = ({ onNext, onBack, initialData }) => {
  const [category, setCategory] = useState(initialData.category || '');

  const handleNext = () => {
    onNext({ category });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col md={6}>
        <div className="job-form-steps-heading mb-3">
          Great, now your job category.
        </div>
        <div className="job-form-steps-subheading mb-3">
          Select the category that best describes your job. This will help
          potential freelancers find your job easier.
        </div>
      </Col>
      <Col md={6}>
        <Form.Select
          className="fl-input mb-4"
          aria-label="Select job category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select Job Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="UX/UI Design">UX/UI Design</option>
          <option value="Copywriting">Copywriting</option>
          <option value="Content Writing">Content Writing</option>
          <option value="SEO">SEO (Search Engine Optimization)</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
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
          <option value="Administrative Support">Administrative Support</option>
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
          <option value="E-commerce Development">E-commerce Development</option>
          <option value="Blockchain Development">Blockchain Development</option>
          <option value="AR/VR Development">AR/VR Development</option>
          <option value="IoT (Internet of Things)">
            IoT (Internet of Things)
          </option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="DevOps">DevOps</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="System Administration">System Administration</option>
          <option value="UI Testing">UI Testing</option>
          <option value="Performance Testing">Performance Testing</option>
          <option value="Other">Other</option>
        </Form.Select>
        <div className="d-flex justify-content-between">
          <button className="fl-button-primary-small" onClick={handleBack}>
            Back
          </button>
          <button className="fl-button-primary-small" onClick={handleNext}>
            Next
          </button>
        </div>
      </Col>
    </Row>
  );
};

const Step4 = ({ onNext, onBack, initialData }) => {
  const [jobLength, setJobLength] = useState(initialData.jobLength || '');
  const [experienceLevel, setExperienceLevel] = useState(
    initialData.experienceLevel || ''
  );

  const handleNext = () => {
    onNext({ jobLength, experienceLevel });
  };

  const handleBack = () => {
    onBack();
  };
  return (
    <Row className="d-flex justify-content-center">
      <Col md={6}>
        <div className="job-form-steps-heading mb-3">
          Time for job length and experience.
        </div>
        <div className="job-form-steps-subheading mb-3">
          Let potentional freelancers know how long the project is intended to
          last, and what kind of experience level you're willing to accept.
        </div>
      </Col>
      <Col md={6}>
        <Form.Select
          className="fl-input mb-4"
          aria-label="Select job category"
          value={jobLength}
          onChange={(e) => setJobLength(e.target.value)}
        >
          <option>Select Job Length</option>
          <option value="Long Term">Long Term</option>
          <option value="Short Term">Short Term</option>
          <option value="Project-Based">Project-Based</option>
        </Form.Select>
        <Form.Select
          className="fl-input mb-4"
          aria-label="Select job category"
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
        >
          <option>Select Experience Level</option>
          <option value="Entry">Entry</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </Form.Select>
        <div className="d-flex justify-content-between">
          <button className="fl-button-primary-small" onClick={handleBack}>
            Back
          </button>
          <button className="fl-button-primary-small" onClick={handleNext}>
            Next
          </button>
        </div>
      </Col>
    </Row>
  );
};

const Step5 = ({ onNext, onBack, initialData }) => {
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(
    initialData.skills || []
  );
  const [selectedOption, setSelectedOption] = useState('Select skills');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/skills');
        setMatchedSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleSkillSelect = (skill) => {
    if (
      selectedSkills.length < 5 &&
      !selectedSkills.some((s) => s.id === skill.id)
    ) {
      setSelectedSkills([...selectedSkills, skill]);
      setSelectedOption('Select skills');
    } else {
      setNotification('You can only select up to 5 skills.');
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill.id !== skillToRemove.id
    );
    setSelectedSkills(updatedSkills);
  };

  const handleNext = () => {
    onNext({ skills: selectedSkills });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col md={6}>
        <div className="job-form-steps-heading mb-3">Now for skills.</div>
        <div className="job-form-steps-subheading mb-3">
          Let freelancers know what skills this project requires. You can select
          up to 5 skills.
        </div>
      </Col>
      <Col md={6}>
        <Select
          className="fl-input mb-4"
          aria-label="Select skills"
          options={matchedSkills.filter(
            (skill) =>
              !selectedSkills.some(
                (selectedSkill) => selectedSkill.id === skill.id
              )
          )}
          onChange={(selectedOption) => handleSkillSelect(selectedOption)}
          value={selectedSkills}
          getOptionLabel={(option) => option.skill}
          getOptionValue={(option) => option.id}
        />
        {notification && (
          <div className="text-danger mb-4 mt-4">{notification}</div>
        )}
        <div>
          {selectedSkills.map((skill) => (
            <span key={skill.id} className="selected-skill">
              {skill.skill}
              <button
                className="btn-close btn-sm"
                onClick={() => handleSkillRemove(skill)}
              ></button>
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button className="fl-button-primary-small" onClick={handleBack}>
            Back
          </button>
          <button className="fl-button-primary-small" onClick={handleNext}>
            Next
          </button>
        </div>
      </Col>
    </Row>
  );
};

const Step6 = ({ onBack, initialData, handleSubmit }) => {
  const [paytype, setPaytype] = useState(initialData.paytype || '');
  const [budget, setBudget] = useState(initialData.budget || '');
  const [currency, setCurrency] = useState(initialData.currency || 'USD');
  const [minPay, setMinPay] = useState(initialData.minPay || '');
  const [maxPay, setMaxPay] = useState(initialData.maxPay || '');

  const handleFinalSubmit = () => {
    const data =
      paytype === 'Hourly'
        ? { paytype, minPay, maxPay, currency }
        : { paytype, budget, currency };

    handleSubmit(data);
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col md={6}>
        <div className="job-form-steps-heading mb-3">
          Now for budget details.
        </div>
        <div className="job-form-steps-subheading mb-3">
          Let the freelancer know what the type of pay is (per project or
          hourly).
        </div>
      </Col>
      <Col md={6}>
        <Form.Group className="mb-3" controlId="formPayType">
          <Form.Select
            className="fl-input"
            aria-label="Select pay type"
            value={paytype}
            onChange={(e) => setPaytype(e.target.value)}
          >
            <option>Select pay type</option>
            <option value="Per Project">Per Project</option>
            <option value="Hourly">Hourly</option>
          </Form.Select>
        </Form.Group>
        {paytype === 'Per Project' && (
          <Form.Group className="mb-3" controlId="formBudget">
            <Form.Label>Maximum Budget</Form.Label>
            <Form.Control
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="fl-input"
            />
          </Form.Group>
        )}
        {paytype === 'Hourly' && (
          <>
            <Form.Group className="mb-3" controlId="formMinPay">
              <Form.Label>Minimum Pay</Form.Label>
              <Form.Control
                type="number"
                value={minPay}
                onChange={(e) => setMinPay(e.target.value)}
                className="fl-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMaxPay">
              <Form.Label>Maximum Pay</Form.Label>
              <Form.Control
                type="number"
                value={maxPay}
                onChange={(e) => setMaxPay(e.target.value)}
                className="fl-input"
              />
            </Form.Group>
          </>
        )}
        <Form.Group className="mb-3" controlId="formCurrency">
          <Form.Label>Currency</Form.Label>
          <Form.Control
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="fl-input"
          />
        </Form.Group>
        <div className="d-flex justify-content-between mt-4">
          <button className="fl-button-primary-small" onClick={onBack}>
            Back
          </button>
          <button
            className="fl-button-primary-small"
            onClick={handleFinalSubmit}
          >
            Post Job
          </button>
        </div>
      </Col>
    </Row>
  );
};

const CreateJobForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    jobLength: '',
    experienceLevel: '',
    skills: [],
    paytype: '',
    budget: '',
    currency: 'USD',
  });

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (data) => {
    const { skills } = formData;
    // Extract the skill names and join them with commas
    const formattedSkills = skills.map((skill) => skill.skill).join(', ');
    // Create a new object with the formatted skills
    const finalData = { ...formData, skills: formattedSkills, ...data };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/post-job',
        finalData
      );
      console.log(response.data);
      // Handle successful job creation, maybe reset form or redirect
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '70vh' }}
    >
      <div>
        {step === 1 && <Step1 onNext={handleNext} initialData={formData} />}
        {step === 2 && (
          <Step2
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        )}
        {step === 3 && (
          <Step3
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        )}
        {step === 4 && (
          <Step4
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        )}
        {step === 5 && (
          <Step5
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        )}
        {step === 6 && (
          <Step6
            onBack={handleBack}
            initialData={formData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default CreateJobForm;
