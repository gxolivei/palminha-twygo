import React from 'react';
import { MdWavingHand } from 'react-icons/md';
import './SpinButton.css';

const SpinButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <MdWavingHand className="hand-icon" />
    </button>
  );
};

export default SpinButton;