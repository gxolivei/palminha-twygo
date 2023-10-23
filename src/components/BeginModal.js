import React from 'react';
import Modal from 'react-modal';
import './BeginModal.css';

const BeginModal = ({ isOpen, onRequestClose, onSelectSquad }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      contentLabel="Select Squad Modal"
      className={"begin-modal"}
      overlayClassName={"begin-overlay"}
    >
      <h2>Selecione o Squad</h2>
      <button className="begin-modal-button" onClick={() => onSelectSquad('Squad 1')}>
        Squad 1
      </button>
      <button className="begin-modal-button" onClick={() => onSelectSquad('Squad 2')}>
        Squad 2
      </button>
    </Modal>
  );
};

export default BeginModal;
