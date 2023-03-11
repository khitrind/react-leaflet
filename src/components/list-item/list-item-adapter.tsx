import { memo } from 'react';

import { useAppSelector } from 'src/store/store';

import { useBoundAction } from 'src/hooks/use-bound-action';
import { setSelectedItem } from 'src/store/map-objects/slice';
import { ListItem } from './list-item';

type Props = {
  id: string;
}

export const ListItemAdapter = memo(({ id }: Props) => {
  const { objectParams, isActive } = useAppSelector(state => {
    const { mapObjectsReducer } = state;
    return {
      isActive: mapObjectsReducer.selectedItem === id,
      objectParams: mapObjectsReducer.items[id],
    };
  });

  const handleSelect = useBoundAction(() => setSelectedItem(id));

  if (!objectParams) {
    console.error('Unknown item id ', id);
    return null;
  }

  return (
    <ListItem onSelect={handleSelect} name={objectParams.name} isActive={isActive} />
  );
});
