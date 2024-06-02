import React, { useState } from 'react';

const ProposalForm = ({
  jobId,
  jobPayType,
  jobMinPay,
  jobMaxPay,
  jobBudget,
}) => {
  const [proposal, setProposal] = useState('');
  const [freelancerRate, setFreelancerRate] = useState('');

  // Placeholder for userId
  const userId = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const proposalData = {
      proposal,
      for_job: jobId,
      from: userId,
      sent_on: new Date().toISOString(),
      freelancer_rate: freelancerRate,
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
      setProposal('');
      setFreelancerRate('');
    } catch (error) {
      console.error('Error submitting proposal:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        {jobPayType === 'Hourly' && (
          <>
            <input
              type="number"
              value={freelancerRate}
              onChange={(e) => setFreelancerRate(e.target.value)}
              placeholder={`Enter your hourly rate between $${jobMinPay} and $${jobMaxPay}`}
              min={jobMinPay}
              max={jobMaxPay}
              className="fl-proposal-input"
              style={{ width: '100%' }}
              required
            />
          </>
        )}
        {jobPayType === 'Per Project' && (
          <>
            <input
              type="number"
              value={freelancerRate}
              onChange={(e) => setFreelancerRate(e.target.value)}
              placeholder={`Enter your project rate up to $${jobBudget}`}
              min={1}
              max={jobBudget}
              className="fl-proposal-input"
              style={{ width: '100%' }}
              required
            />
          </>
        )}
      </div>
      <div className="mb-4">
        <textarea
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          placeholder="Write your proposal..."
          className="job-proposal-form"
        />
      </div>
      <button className="fl-button-primary" type="submit">
        Submit Proposal
      </button>
    </form>
  );
};

export default ProposalForm;
