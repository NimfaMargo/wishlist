import React from 'react';
import PropTypes from 'prop-types';
import 'components/Card/Card.scss';

const Card = ({ name, url, price }) => (
  <div className="card">
    <p>{name}</p>
    <p>{url}</p>
    <p>{price}</p>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
