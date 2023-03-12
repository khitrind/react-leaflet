import { memo } from 'react';
import cn from 'classnames';
import { IconButton } from 'src/components/icon-button';
import styles from './list-item.module.css';

type Props = {
  name: string;
  type?: string;
  isActive: boolean;
  onSelect: () => void;
  onRemove: () => void;
};

export const ListItem = memo(
  ({ isActive, onSelect, name, type, onRemove }: Props) => (
    <li
      onClick={onSelect}
      className={cn(styles.listItem, isActive && styles.active)}>
      <div className={styles.itemInfo}>
        <p className={styles.text}>{name}</p>
        {type && <p className={styles.text}>{type}</p>}
      </div>
      <IconButton onClick={onRemove} label="Remove map object item button" />
    </li>
  )
);
