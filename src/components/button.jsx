import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, title, handleClick }) => (
  <button
    title={title}
    className='my-4 py-3 px-8 bg-primary text-white text-lg hover:opacity-80 rounded-md transition-opacity'
    onClick={handleClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
}
