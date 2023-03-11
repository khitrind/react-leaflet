import { LatLngExpression } from 'leaflet';

export type MapObjects = 'polyline';

export type MapObjectData = {
  type: MapObjects;
  id: string;
  position: LatLngExpression[];
  name: string;
}
