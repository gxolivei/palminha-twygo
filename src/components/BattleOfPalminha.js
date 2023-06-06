import React, { useState } from 'react';

import './BattleOfPalminha.css';

import image1 from '../images/image1.png';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.png';

const BattleOfPalminha = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (src) => {
    setExpandedImage(src);
  };

  const handleCloseModal = () => {
    setExpandedImage(null);
  };

  return (
    <div className="battle-of-palminha-container">
      <h2>Battle of Palminha</h2>
      <div className="battle-of-palminha-images">
        <img src={image1} alt="Image 1" onClick={() => handleImageClick(image1)} />
        <img src={image2} alt="Image 2" onClick={() => handleImageClick(image2)} />
        <img src={image3} alt="Image 3" onClick={() => handleImageClick(image3)} />
        <img src={image4} alt="Image 4" onClick={() => handleImageClick(image4)} />
        <img src={image5} alt="Image 5" onClick={() => handleImageClick(image5)} />
      </div>
      {expandedImage && (
        <div className="modal-image" onClick={handleCloseModal}>
          <img src={expandedImage} alt="Expanded Image" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '20px', objectFit: 'contain'}} />
        </div>
      )}
    </div>
  );
};

export default BattleOfPalminha;