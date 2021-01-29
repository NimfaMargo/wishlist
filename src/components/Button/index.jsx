import React from 'react';
import PropTypes from 'prop-types';
import 'components/Button/Button.scss';

const Button = ({ children, disabled }) => (
  <button type="button" className="button" disabled={disabled}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
