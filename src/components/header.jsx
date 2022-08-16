import React from 'react';
import { ButtonTheme } from './button-theme';

export const Header = () => (
  <header className='relative z-10 p-10 pt-20 lg:pt-10 text-center'>
    <div className='absolute top-1 right-4'>
      <ButtonTheme />
    </div>
    <h1 className='text-3xl mb-3 font-bold'>CSS Shadow Generator</h1>
    <p>Easily generate box-shadow or text-shadow CSS code, with your customization.</p>
  </header>
);
