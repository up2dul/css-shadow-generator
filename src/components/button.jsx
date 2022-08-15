import React from 'react';

export const Button = ({ children, handleClick }) => (
  <button 
    className='mx-auto my-4 py-2 px-8 bg-primary text-white text-lg hover:opacity-90 rounded-md'
    onClick={handleClick}
  >
    {children}
  </button>
);
