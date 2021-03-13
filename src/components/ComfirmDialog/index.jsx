import React from 'react';
import PropTypes from 'prop-types';
import 'components/ComfirmDialog/styles/ConfirmDialog.scss';
import BackDrop from 'components/Backdrop';
import Button from 'components/Button';

const ConfirmDialog = ({
  isOpen, onSubmit, onClose, children,
}) => (isOpen
  && (
  <>
    <div className="confirm">
      <div className="confirm__content">{children}</div>
      <div className="confirm__actions">
        <Button type="submit" onClick={onClose}>
          Отменить
        </Button>
        <Button type="submit" onClick={onSubmit}>
          Подтвердить
        </Button>
      </div>
    </div>
    <BackDrop onClick={onClose} />
  </>
  )
);

ConfirmDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ConfirmDialog;
