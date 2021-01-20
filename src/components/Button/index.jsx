import React from 'react';
import PropTypes from 'prop-types';
import 'components/Button/Button.scss';

const Button = ({ children, isDisabled }) => (
  <button type="button" className="button" disabled={isDisabled}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default Button;
