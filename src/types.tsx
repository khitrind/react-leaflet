import { LatLngExpression } from 'leaflet';

export type ItemType = 'polyline';

export type MapObjectData = {
  type: ItemType;
  id: string;
  position: LatLngExpression[];
  name: string;
}
