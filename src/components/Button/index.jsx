import React from 'react';
import PropTypes from 'prop-types';
import 'components/Button/Button.scss';

const Button = ({ children, disabled, onClick }) => (
  <button type="button" className="button" onClick={onClick} disabled={disabled}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
