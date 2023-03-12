import React, { memo } from 'react';
import { ReactComponent as MinusIcon } from 'src/icons/minus.svg';

import styles from './icon-button.module.css';

type Props = {
  label: string;
  onClick: () => void;
}

export const IconButton = memo(({ label, onClick }: Props) => {
  return (
    <button className={styles.button} type="button" aria-label={label} onClick={onClick}>
      <MinusIcon className={styles.icon} />
    </button>
  );
});


