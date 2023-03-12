import { memo } from 'react';
import { LatLngExpression } from 'leaflet';
import { useBoundAction } from 'src/hooks/use-bound-action';
import { addMapObject } from 'src/store/map-objects/slice';
import { AddPolyline } from './add-polyline';
import { ItemData, ItemType } from 'src/types';
import { isAddModeEnabledselector } from 'src/store/map-objects/selectors';
import { useAppSelector } from 'src/store/store';

const createPolylineObject = (() => {
  let itemIdx = 1;

  return (position: LatLngExpression[]): ItemData => ({
    position,
    id: `id: ${Math.random()}`,
    name: `Rout: ${itemIdx++}`,
    type: ItemType.Polyline,
  });
})();

export const AddPolylineAdapter = memo(() => {
  const isAddModeEnabled = useAppSelector(isAddModeEnabledselector);

  const handleObjectCreated = useBoundAction((position: LatLngExpression[]) => {
    return addMapObject(createPolylineObject(position));
  });

  if (!isAddModeEnabled) {
    return null;
  }

  return <AddPolyline onObjectCreated={handleObjectCreated} />;
});
