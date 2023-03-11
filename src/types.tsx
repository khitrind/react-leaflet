import { LatLngExpression } from 'leaflet';

type MapObjects = 'polyline';

export type MapObjectData = {
  type: MapObjects;
  id: string;
  position: LatLngExpression[];
  name: string;
}
