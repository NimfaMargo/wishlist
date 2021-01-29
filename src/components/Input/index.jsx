import React from 'react';
import { bem } from 'utils/bem';
import './styles/Input.scss';

const cn = bem('input-wrapper');

const Input = (props) => (
  <label htmlFor="input" className={cn()}>
    <input id="input" className={cn('item')} {...props} />
  </label>
);

export default Input;
