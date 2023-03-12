import { memo } from 'react';
import { typeSafeItemDataSelector } from 'src/store/map-objects/selectors';
import { useAppSelector } from 'src/store/store';
import { PolylineItem } from './polyline-item';

type Props = {
  id: string;
}

export const PolylineItemAdapter = memo(({id}: Props) => {
  const { item, isActive } = useAppSelector(state => {
    const { mapObjectsReducer } = state;
    const item = typeSafeItemDataSelector(state, id, 'polyline');
    return {
      isActive: mapObjectsReducer.selectedItem === id,
      item
    };
  });

  return (
    <PolylineItem
      isActive={isActive}
      position={item.position}
      id={item.id}
    />
  );
});
