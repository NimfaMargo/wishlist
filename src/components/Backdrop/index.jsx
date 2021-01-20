import React from 'react';
import 'components/Backdrop/Backdrop.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line jsx-a11y/no-static-element-interactions
const BackDrop = ({ onClick }) => <div onClick={onClick} className="backdrop" />;

BackDrop.propTypes = {
  onClick: PropTypes.func,
};

export default BackDrop;
