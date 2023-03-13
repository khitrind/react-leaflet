import {memo, useCallback} from 'react';
import {LatLngExpression} from 'leaflet';
import {AddPolyline} from './add-polyline';
import {ItemData, ItemType} from 'src/types';
import {isAddModeEnabledselector} from 'src/store/map-objects/selectors';
import {useAppSelector} from 'src/store/store';
import {useAddValidateMapObject} from 'src/hooks/use-add-validate-map-object';

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
  const handelAddValidateMapObject = useAddValidateMapObject();

  const handleObjectCreated = useCallback(
    (position: LatLngExpression[]) => {
      handelAddValidateMapObject(createPolylineObject(position));
    },
    [handelAddValidateMapObject],
  );

  if (!isAddModeEnabled) {
    return null;
  }

  return <AddPolyline onObjectCreated={handleObjectCreated} />;
});
