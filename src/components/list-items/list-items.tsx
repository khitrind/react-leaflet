import { memo } from 'react';
import { itemsOrderSelector } from 'src/store/map-objects/selectors';
import { useAppSelector } from 'src/store/store';
import { ErrorBoundary } from 'src/components/error-boundary';
import { ListItemAdapter } from 'src/components/list-item';

import styles from './list-items.module.css';

export const ListItems = memo(() => {
  const itemsOrder = useAppSelector(itemsOrderSelector);

  return (
    <ul className={styles.list}>
      {itemsOrder.map(({id, type}) => (
        <ErrorBoundary key={id}>
          <ListItemAdapter
            id={id}
            type={type}
          />
        </ErrorBoundary>
      ))}
    </ul>
  );
});
