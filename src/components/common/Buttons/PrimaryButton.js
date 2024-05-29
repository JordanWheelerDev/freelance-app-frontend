import React from 'react';

const PrimaryButton = ({ id, text, style, fullWidth }) => {
  const buttonStyle = fullWidth ? { ...style, width: '100%' } : style;

  return (
    <button className="fl-button-primary" id={id} style={buttonStyle}>
      {text}
    </button>
  );
};

export default PrimaryButton;
