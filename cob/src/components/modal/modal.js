import React from 'react';
import './modal.css';

const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={close}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body-text">
                {children}
            </div>
            <button className="modal-close-button" onClick={close}>닫기</button>
        </div>
        </div>
    );
};

export default Modal;
