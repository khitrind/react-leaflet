import { LatLngExpression } from 'leaflet';

export enum ItemType {
  Polyline = 'polyline',
}

export type ItemData = {
  type: ItemType;
  id: string;
  position: LatLngExpression[];
  name: string;
};
