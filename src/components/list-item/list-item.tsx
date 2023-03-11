import { memo } from 'react';
import cn from 'classnames';


import styles from './list-item.module.css';

type Props = {
  name: string;
  type?: string;
  isActive: boolean;
  onSelect: () => void;
  onRemove?: () => void;
}

export const ListItem = memo(({ isActive, onSelect, name }: Props) => (
  <div onClick={onSelect} className={cn(
    styles.refreshButton,
    isActive && styles.active
  )}>
    {name}
  </div>
));
