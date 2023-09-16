import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
  useEffect(() => {
    function handleKeyDown(evt) {
      if (evt.code === 'Escape') {
        onClose();
        // document.body.style.overflow = 'visible'; // re scroll
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onClose();
      // document.body.style.overflow = 'visible'; // re scroll
    }
  }

  document.body.style.overflow = 'hidden'; // stop scroll

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
