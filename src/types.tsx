import {LatLngExpression} from 'leaflet';

export enum ItemType {
  Polyline = 'polyline',
}

export type ItemTypeToData = {
  [ItemType.Polyline]: PolylineData;
};

export type PolylineData = {
  type: ItemType.Polyline;
  position: LatLngExpression[];
};

export type ItemData = {
  id: string;
  name: string;
} & PolylineData;
