import React, { memo } from 'react';

import styles from './icon-button.module.css';

type Props = {
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
}

export const IconButton = memo(({ icon, label, onClick }: Props) => {
  return (
    <button className={styles.button} type="button" aria-label={label} onClick={onClick}>
      {icon}
    </button>
  );
});


