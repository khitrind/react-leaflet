import { memo } from 'react';
import { itemsOrderSelector } from 'src/store/map-objects/selectors';
import { useAppSelector } from 'src/store/store';
import { ErrorBoundary } from 'src/components/error-boundary';
import { ListItemAdapter } from 'src/components/list-item';


export const ListItems = memo(() => {
  const itemsOrder = useAppSelector(itemsOrderSelector);

  return (
    <div>
      {itemsOrder.map(({id, type}) => (
        <ErrorBoundary key={id}>
          <ListItemAdapter
            id={id}
            type={type}
          />
        </ErrorBoundary>
      ))}
    </div>
  );
});
