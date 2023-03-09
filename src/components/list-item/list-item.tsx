import React, { memo } from 'react';
import cn from 'classnames';
import styles from './list-item.module.css';

type Props = {
  id?: string;
  name: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const ListItem = memo(({ name, onClick, isActive }: Props) => {

  return (
    <div onClick={onClick} className={cn(
      styles.refreshButton,
      isActive && styles.active
    )}>
      {name}
    </div>
  );
});
