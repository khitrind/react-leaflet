import { memo } from 'react';
import { itemsOrderSelector } from 'src/store/map-objects/selectors';
import { useAppSelector } from 'src/store/store';
import { ListItemAdapter } from '../list-item/list-item-adapter';


export const ListItems = memo(() => {
  const itemsOrder = useAppSelector(itemsOrderSelector);

  return (
    <div>
      {itemsOrder.map((id) => (
        <ListItemAdapter
          key={id}
          id={id}
        />
      ))}
    </div>
  );
});
