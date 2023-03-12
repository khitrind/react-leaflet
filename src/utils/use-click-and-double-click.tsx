import { useCallback, useRef } from 'react';

type TimerParams = {
  timer: number;
  prevent: boolean;
};

export type Props<T> = {
  onClick: (args: T) => void;
  onDoubleClick: (args: T) => void;
  delay?: number;
};

export const useClickAndDoubleClick = <T,>({
  onClick,
  onDoubleClick,
  delay = 200,
}: Props<T>) => {
  const ref = useRef<TimerParams>({ timer: 0, prevent: false });

  const handleClick = useCallback(
    (e: T) => {
      ref.current.timer = window.setTimeout(() => {
        if (!ref.current.prevent) {
          onClick(e);
        }
        ref.current.prevent = false;
      }, delay);
    },
    [onClick, delay]
  );

  const handleDoubleClick = useCallback(
    (e: T) => {
      ref.current.prevent = true;
      window.clearTimeout(ref.current.timer);
      onDoubleClick(e);
    },
    [onDoubleClick]
  );

  return { onClick: handleClick, onDoubleClick: handleDoubleClick };
};
