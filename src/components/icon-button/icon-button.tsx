import React, {memo} from 'react';

import styles from './icon-button.module.scss';

type Props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: () => void;
  fill?: string;
};

export const IconButton = memo(({label, onClick, Icon, fill}: Props) => (
  <button className={styles.button} type="button" aria-label={label} onClick={onClick}>
    <Icon className={styles.icon} fill={fill} />
  </button>
));
