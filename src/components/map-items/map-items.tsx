import { memo} from 'react';
import { useAppSelector } from 'src/store/store';
import { itemsOrderSelector } from 'src/store/map-objects/selectors';
import { MapItem } from 'src/components/map-item';
import { ErrorBoundary } from '../error-boundary';



export const MapItems = memo(() => {
  const itemsOrder = useAppSelector(itemsOrderSelector);

  return (
    <>
      {itemsOrder.map(({id, type}) => {
        return (
          <ErrorBoundary key={id}>
            <MapItem id={id} type={type}/>;
          </ErrorBoundary>
        );
      })}
    </>
  );
});


