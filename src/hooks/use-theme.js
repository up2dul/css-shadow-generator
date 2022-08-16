import { useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  const toggleTheme = () => setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return [theme, toggleTheme];
}
