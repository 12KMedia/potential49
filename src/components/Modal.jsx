import React from 'react';
import './Modal.scss';

const Modal = ({ children, onClose }) => (
  <div className="modal">
    <span className="close-btn" onClick={onClose}>&times;</span>
    {children}
  </div>
);

export default Modal;
