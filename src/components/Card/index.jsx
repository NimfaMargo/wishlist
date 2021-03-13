import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.scss';

const Card = ({
  id, name, url, price, onEdit, onRemove,
}) => (
  <div className="card">
    {url ? <p><a href={url}>{name}</a></p> : <p>{name}</p>}
    <p>{price}</p>
    <button aria-label="edit" className="card__remove" onClick={() => onRemove({ name, id })} type="button" />
    <button aria-label="remove" className="card__edit" onClick={() => onEdit(id)} type="button" />
  </div>
);
Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
