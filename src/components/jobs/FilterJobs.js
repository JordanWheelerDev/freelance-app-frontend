import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FilterJobsSidebar = () => {
  const [hourlyChecked, setHourlyChecked] = useState(false);
  const [perProjectChecked, setPerProjectChecked] = useState(false);
  const [perProjectSliderValue, setPerProjectSliderValue] = useState(0);

  const handleHourlyChange = (e) => {
    setHourlyChecked(e.target.checked);
    setPerProjectChecked(false); // Uncheck Per Project when Hourly is checked
  };

  const handlePerProjectChange = (e) => {
    setPerProjectChecked(e.target.checked);
    setHourlyChecked(false); // Uncheck Hourly when Per Project is checked
  };

  const handlePerProjectSliderChange = (e) => {
    setPerProjectSliderValue(e.target.value);
  };

  return (
    <Row>
      <Col md={12}>
        <div className="mb-4">
          <div className="filter-title">Experience Level</div>
          <Form.Check type="checkbox" className="fl-checkbox" label="Entry" />
          <Form.Check
            type="checkbox"
            className="fl-checkbox"
            label="Intermediate"
          />
          <Form.Check type="checkbox" className="fl-checkbox" label="Expert" />
        </div>
        <div className="mb-4">
          <div className="filter-title">Job Type</div>
          <Form.Check
            type="checkbox"
            className="fl-checkbox"
            label="Per Project"
            checked={perProjectChecked}
            onChange={handlePerProjectChange}
          />
          <Form.Check
            type="checkbox"
            className="fl-checkbox"
            label="Hourly"
            checked={hourlyChecked}
            onChange={handleHourlyChange}
          />
          {hourlyChecked && (
            <div className="hourly-inputs mt-3">
              <Form.Control
                type="number"
                className="mb-3 fl-input"
                placeholder="Min/hr"
              />
              <Form.Control
                type="number"
                className="mb-3 fl-input"
                placeholder="Max/hr"
              />
            </div>
          )}
          {perProjectChecked && (
            <div className="per-project-inputs mt-3">
              <input
                type="range"
                min="0"
                max="99999"
                value={perProjectSliderValue}
                onChange={handlePerProjectSliderChange}
                className="fl-range"
              />
              <div className="mt-2">${perProjectSliderValue}</div>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default FilterJobsSidebar;
