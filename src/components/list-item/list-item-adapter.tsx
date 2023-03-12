import { memo } from 'react';

import { useAppSelector } from 'src/store/store';

import { useBoundAction } from 'src/hooks/use-bound-action';
import { setSelectedItem } from 'src/store/map-objects/slice';
import { ListItem } from './list-item';
import { typeSafeItemDataSelector } from 'src/store/map-objects/selectors';
import { ItemType } from 'src/types';

type Props = {
  id: string;
  type: ItemType;
}

export const ListItemAdapter = memo(({ id, type }: Props) => {
  const { item, isActive } = useAppSelector(state => {
    const { mapObjectsReducer } = state;
    const item = typeSafeItemDataSelector(state, id, type);
    return {
      isActive: mapObjectsReducer.selectedItem === id,
      item
    };
  });

  const handleSelect = useBoundAction(() => setSelectedItem(id));

  return (
    <ListItem onSelect={handleSelect} name={item.name} isActive={isActive} />
  );
});
