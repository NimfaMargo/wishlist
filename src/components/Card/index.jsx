import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.scss';
import { useDispatch } from 'react-redux';
import { removeCard } from 'reducers/cards';
import { bem } from 'utils/bem';

const cn = bem('card');

const Card = ({ name, url, price }) => {
  const dispatch = useDispatch();

  return (
    <div className={cn()}>
      <p>{name}</p>
      <p>{url}</p>
      <p>{price}</p>
      <button aria-label="remove" className={cn('remove')} onClick={() => dispatch(removeCard(name))} type="button" />
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
