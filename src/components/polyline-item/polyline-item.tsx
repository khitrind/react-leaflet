import { memo ,useMemo} from 'react';
import { LatLngExpression, LeafletEventHandlerFnMap } from 'leaflet';
import { Polyline } from 'react-leaflet';

type Props = {
  id: string;
  position: LatLngExpression[];
  isActive: boolean;
  onClick: () => void;
}

export const PolylineItem = memo(({
  isActive, 
  position,
  onClick
}: Props) => {
  const eventHandlers: LeafletEventHandlerFnMap = useMemo(() => ({click: onClick}),[onClick]);
  return (
    <Polyline
      pathOptions={{color: isActive ? 'red' : 'green'}}
      positions={position} 
      eventHandlers={eventHandlers}
    />
  );
});
