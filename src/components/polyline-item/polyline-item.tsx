import {memo, useMemo} from 'react';
import {LatLngExpression, LeafletEventHandlerFnMap} from 'leaflet';
import {Polyline} from 'react-leaflet';

type Props = {
  id: string;
  position: LatLngExpression[];
  isActive: boolean;
  onClick: () => void;
};

export const PolylineItem = memo(({isActive, position, onClick}: Props) => {
  const eventHandlers: LeafletEventHandlerFnMap = useMemo(() => ({click: onClick}), [onClick]);

  const pathOptions = useMemo(
    () => ({
      color: isActive ? 'red' : 'blue',
    }),
    [isActive],
  );

  return <Polyline pathOptions={pathOptions} positions={position} eventHandlers={eventHandlers} />;
});
