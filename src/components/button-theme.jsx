import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from './button';

export const ButtonTheme = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <Button handleClick={toggleTheme}>
      {theme === 'light' 
        ? <FaMoon className='fill-white' /> 
        : <FaSun />
      }
    </Button>
  );
}
