import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    return window.localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, storedValue);
  }, [storedValue]);

  return [storedValue, setStoredValue];
}
