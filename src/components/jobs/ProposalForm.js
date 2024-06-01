import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ProposalForm = ({ jobId }) => {
  const [proposal, setProposal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to submit proposal
    console.log('Submitted proposal:', proposal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        placeholder="Write your proposal..."
        className="job-proposal-form"
      />
      <button className="fl-button-primary" type="submit">
        Submit Proposal
      </button>
    </form>
  );
};

export default ProposalForm;
