import React from 'react';

export const Button = ({ children }) => (
  <button className='mx-auto my-4 py-2 px-8 bg-custom-turquoise text-white text-lg hover:opacity-90 rounded-md'>
    {children}
  </button>
);
