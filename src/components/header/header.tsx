import React, { memo } from 'react';
import { IconButton } from 'src/components/icon-button';
import { ReactComponent as Logo } from 'src/icons/plus.svg';



import styles from './header.module.css';

type Props = {
  text: string;
  onClick: () => void;
}

export const Header = memo(({ text, onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.header}>
      <p className={styles.text}>{text}</p>
      <IconButton onClick={onClick} label="Add item button" Icon={Logo} />
    </div>
  );
});
