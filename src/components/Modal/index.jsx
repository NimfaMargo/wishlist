import React from 'react';
import PropTypes from 'prop-types';
import 'components/Modal/styles/Modal.scss';
import BackDrop from 'components/Backdrop';

const Modal = ({ isOpen, onClose, children }) => (isOpen
  && (
  <>
    <div className="modal">
      <button aria-label="close" className="modal__close" onClick={onClose} type="button" />
      <div className="modal__content">{children}</div>
    </div>
    <BackDrop onClick={onClose} />
  </>
  )
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
