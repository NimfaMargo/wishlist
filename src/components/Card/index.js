import React from 'react';
import PropTypes from "prop-types";
import classes from './Card.module.css';

const Card = ({text, url, price}) => (
    <div className={classes.Card}>
        <p>{text}</p>
        <p>{url}</p>
        <p>{price}</p>
    </div>
);

Card.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Card;
