import React from 'react';
import PropTypes from "prop-types";
import classes from './Button.module.css';

const Button = ({children, ...props}) => (
    <button className={classes.Button} {...props}>{children}</button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;
