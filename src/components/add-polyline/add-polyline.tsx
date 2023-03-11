import { LatLngExpression } from 'leaflet';
import { memo, useState } from 'react';
import { Polyline, useMapEvents } from 'react-leaflet';

const fillBlueOptions = { fillColor: 'blue' };

export const AddPolyline = memo(() => {

  const [position, setPosition] = useState<LatLngExpression[]>([]);
  useMapEvents({
    click: (e) => {
      e.latlng;
      setPosition((pos) => [...pos, e.latlng]);
    },
    dblclick: (e) => {
      e.latlng;
      setPosition((pos) => [...pos, e.latlng]);
    },
  });

  return (
    <Polyline pathOptions={fillBlueOptions} positions={position} />
  );
});
