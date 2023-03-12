import { memo } from 'react';
import { LatLngExpression } from 'leaflet';
import { Polyline } from 'react-leaflet';

type Props = {
  id: string;
  position: LatLngExpression[];
  isActive: boolean;
}

export const PolylineItem = memo(({isActive,  position}: Props) => (
  <Polyline
    pathOptions={{fillColor: isActive ? 'green': 'black'}}
    positions={position} 
  />
));
