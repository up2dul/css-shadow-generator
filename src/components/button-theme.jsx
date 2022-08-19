import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/hooks/use-theme';
import { Button } from './button';

export const ButtonTheme = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <Button title='Switch theme' handleClick={toggleTheme}>
      {theme === 'light' 
        ? <FaMoon className='fill-white' /> 
        : <FaSun />
      }
    </Button>
  );
}
