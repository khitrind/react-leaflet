import React, { memo } from 'react';

import styles from './header.module.css';
import { IconButton } from '../icon-button';

type Props = {
  text: string;
  onClick: () => void;
}

export const Header = memo(({ text, onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.header}>
      {text}
      <IconButton onClick={onClick} label="Add item button" />
    </div>
  );
});
