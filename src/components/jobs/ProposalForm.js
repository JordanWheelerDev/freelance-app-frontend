import React, { useState } from 'react';

const ProposalForm = ({ jobId }) => {
  const [proposal, setProposal] = useState('');

  // Placeholder for userId
  const userId = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const proposalData = {
      proposal: proposal,
      for_job: jobId,
      from: userId,
      sent_on: new Date().toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/send-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proposalData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit proposal');
      }

      const result = await response.json();
      console.log('Submitted proposal:', result);
      // Clear the form after submission
      setProposal('');
    } catch (error) {
      console.error('Error submitting proposal:', error);
    }
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
