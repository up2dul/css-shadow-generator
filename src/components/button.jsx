import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, handleClick }) => (
  <button 
    className='my-4 py-3 px-8 bg-primary text-white text-lg hover:opacity-80 rounded-md'
    onClick={handleClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func,
}
