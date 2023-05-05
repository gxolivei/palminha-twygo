import React from 'react';
import { MdWavingHand, MdOutlineStopCircle } from 'react-icons/md';
import './SpinButton.css';

const SpinButton = ({ onClick, easterEggTriggered, onReset }) => {
  const handleClick = () => {
    if (easterEggTriggered) {
      onReset();
    } else {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={easterEggTriggered ? 'easter-egg' : ''}>
      {easterEggTriggered ? (
        <MdOutlineStopCircle className="hand-icon hand-icon-easter-egg" />
      ) : (
        <MdWavingHand className="hand-icon" />
      )}
    </button>
  );
};

export default SpinButton;