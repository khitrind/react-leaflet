import React, { memo } from 'react';

import styles from './icon-button.module.css';

type Props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: () => void;
}

export const IconButton = memo(({ Icon, label, onClick }: Props) => {
  return (
    <button className={styles.button} type="button" aria-label={label} onClick={onClick}>
      <Icon className={styles.icon} />
    </button>
  );
});


