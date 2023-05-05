import React from 'react';
import { MdWavingHand, MdOutlineStopCircle } from 'react-icons/md';
import './SpinButton.css';

const SpinButton = ({ onClick, easterEggTriggered }) => {
  return (
    <button onClick={onClick} className={easterEggTriggered ? 'easter-egg' : ''}>
      {easterEggTriggered ? (
        <MdOutlineStopCircle className="hand-icon hand-icon-easter-egg" />
      ) : (
        <MdWavingHand className="hand-icon" />
      )}
    </button>
  );
};

export default SpinButton;