import { memo } from 'react';

import { useAppSelector } from 'src/store/store';

import { useBoundAction } from 'src/hooks/use-bound-action';
import { setSelectedItem, removeItem } from 'src/store/map-objects/slice';
import { ListItem } from './list-item';
import { listItemParamsSelector } from 'src/store/map-objects/selectors';
import { ItemType } from 'src/types';
import { convertTypeToDysplayType } from 'src/utils/type-to-dysplay-type';
import { deepEqual } from 'src/utils/deepEqual';

type Props = {
  id: string;
  type: ItemType;
};

export const ListItemAdapter = memo(({ id, type }: Props) => {
  const { item, isActive } = useAppSelector(
    state => listItemParamsSelector(state, id, ItemType.Polyline),
    deepEqual
  );

  const handleSelect = useBoundAction(() => setSelectedItem(id));
  const handleRemove = useBoundAction(() => removeItem(id));

  return (
    <ListItem
      onSelect={handleSelect}
      name={item.name}
      isActive={isActive}
      type={convertTypeToDysplayType(type)}
      onRemove={handleRemove}
    />
  );
});
