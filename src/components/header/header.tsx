import { memo } from 'react';
import styles from './header.module.css';

type Props = {
  text: string;
  onClick: () => void;
}

export const Header = memo(({ text, onClick }: Props) => {
  return (
    <header onClick={onClick} className={styles.header}>
      <p className={styles.text}>{text}</p>
    </header>
  );
});
