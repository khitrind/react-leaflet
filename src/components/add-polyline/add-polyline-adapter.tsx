import { memo } from 'react';
import { LatLngExpression } from 'leaflet';
import { useBoundAction } from 'src/hooks/use-bound-action';
import { addMapObject } from 'src/store/map-objects/slice';
import { AddPolyline } from './add-polyline';

export const AddPolylineAdapter = memo(() => {
  const handleObjectCreated = useBoundAction((position: LatLngExpression[]) => {
    const result = {
      position,
      id: `id: ${Math.random()}`,
      name: `name: ${Math.random()}`,
      type: 'polyline' as const
    };

    return addMapObject(result);
  });

  return (
    <AddPolyline onObjectCreated={handleObjectCreated} />
  );
});
