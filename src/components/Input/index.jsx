import React from 'react';
import './styles/Input.scss';

const Input = (props) => (
  <label htmlFor="input" className="input-wrapper">
    <input id="input" className="input-wrapper__item" {...props} />
  </label>
);

export default Input;
