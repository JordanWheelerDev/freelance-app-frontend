import React from 'react';

const PrimaryButtonSmall = ({ id, text, style, fullWidth }) => {
  const buttonStyle = fullWidth ? { ...style, width: '100%' } : style;

  return (
    <button className="fl-button-primary-small" id={id} style={buttonStyle}>
      {text}
    </button>
  );
};

export default PrimaryButtonSmall;
