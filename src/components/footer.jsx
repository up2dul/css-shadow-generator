import React from 'react';
import { FaCode, FaHeart } from 'react-icons/fa';

export const Footer = () => (
  <footer className='p-10 text-center'>
    <p>
      <FaCode className='inline mr-1' /> with
      <FaHeart className='inline mx-1' /> by
      <a 
        href='https://github.com/up2dul/' 
        rel='noopener noreferrer'
        target='_blank'
        className='ml-1 underline decoration-2 hover:decoration-dashed'>
        Abdul.
      </a>
    </p>
  </footer>
);
