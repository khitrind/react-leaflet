import {useEffect} from 'react';

export type Key = 'ArrowDown' | 'ArrowUp' | 'Enter' | 'Escape';

type UseKeyboard = (handler: (key: Key) => void, keys: Key[]) => void;

export const useKeyboard: UseKeyboard = (handler, keys) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!keys.includes(event.key as Key)) return;

      event.preventDefault();
      event.stopPropagation();

      handler(event.key as Key);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, keys]);
};
