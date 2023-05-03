import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import SpinButton from './SpinButton';
import ResultModal from './ResultModal';
import pointerImage from '../images/sophia.svg';
import { generateGradientColors, getInverseColor } from '../helpers';

const WheelComponent = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const gradientColors = generateGradientColors(
    { r: 245, g: 245, b: 245 },
    { r: 128, g: 0, b: 128 },
    data.length
  );

  const inverseTextColors = gradientColors.map((color) => getInverseColor(color));

  const handleSpinClick = () => {
    if (!mustSpin) {
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
      transition: 'transform 0.5s',
      transform: mustSpin ? 'rotate(10deg)' : 'rotate(0)',
    },
  };

  return (
    <>
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
      <SpinButton onClick={handleSpinClick} />
      <ResultModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedNumber={data[prizeNumber]?.option} />
    </>
  );
};

export default WheelComponent;
