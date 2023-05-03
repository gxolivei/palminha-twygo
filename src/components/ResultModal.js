import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Confetti from 'canvas-confetti';
import './ResultModal.css';

Modal.setAppElement('#root');

const ResultModal = ({ isOpen, onRequestClose, selectedNumber }) => {
  useEffect(() => {
    if (isOpen) {
      const confetti = Confetti.create(document.querySelector('.confetti-container'), {
        resize: true,
        useWorker: true,
      });

      const explosionOptions = {
        particleCount: 250,
        spread: 100,
        origin: { y: 0.6 },
      };

      confetti(explosionOptions);
    }
  }, [isOpen]);

  return (
    
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="Overlay">
      <h2 className="result-modal-text">
        Palminha do dia 
        <span className="selected-person-to-clap">
          {selectedNumber}
        </span>
      </h2>
      <button onClick={onRequestClose} className="result-modal-button">Fechar</button>
      <div className="confetti-container"/>
    </Modal>
  );
};

export default ResultModal;
