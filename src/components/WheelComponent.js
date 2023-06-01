import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import SpinButton from './SpinButton';
import ResultModal from './ResultModal';
import pointerImage from '../images/sophia.svg';
import { generateGradientColors, getInverseColor, shuffle } from '../helpers';
import './WheelComponent.css';

const WheelComponent = ({ data, isEmpty = false, onReset }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [easterEggTriggered, setEasterEggTriggered] = useState(isEmpty);

  useEffect(() => {
    setEasterEggTriggered(isEmpty);
  }, [isEmpty]);

  const gradientColors = generateGradientColors(
    { r: 245, g: 245, b: 245 },
    { r: 128, g: 0, b: 128 },
    data.length
  );

  const inverseTextColors = gradientColors.map((color) => getInverseColor(color));

  const handleSpinClick = () => {
    if (!mustSpin && !isEmpty) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setModalIsOpen(true);
  };

  const pointerProps = {
    src: pointerImage,
    style: {
      width: '5.438rem',
      height: '5.438rem',
      transition: 'transform 0.1s',
      transform: mustSpin ? 'rotate(17deg)' : 'rotate(-17deg)',
    },
  };

  return (
    <>
      {!isEmpty ? (
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          disableInitialAnimation={true}
          backgroundColors={gradientColors}
          fontSize={14}
          textColors={inverseTextColors}
          textDistance={60}
          onStopSpinning={handleStopSpinning}
          outerBorderColor={gradientColors}
          radiusLineWidth={0}
          perpendicularText={false}
          spinDuration={0.5}
          pointerProps={pointerProps}
        />
      ) : (
        <div className="no-members-message">
          Hmmmmmmmmmmmm 🤔
        </div>
      )}
      <SpinButton onClick={handleSpinClick} easterEggTriggered={easterEggTriggered} onReset={onReset} />
      <ResultModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedNumber={data[prizeNumber]?.option} />
    </>
  );
};

export default WheelComponent;
