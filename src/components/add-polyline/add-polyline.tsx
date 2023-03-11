import { memo } from 'react';
import { Polyline, useMapEvents } from 'react-leaflet';

import { useAddPolyline } from './use-add-polyline';

const fillBlueOptions = { fillColor: 'blue' };

type Props = {
  onObjectCreated: () => void;
}

export const AddPolyline = memo(({ onObjectCreated }: Props) => {
  const { position, handleClick, handleDoubleClick } = useAddPolyline(onObjectCreated);

  useMapEvents({
    click: handleClick,
    dblclick: handleDoubleClick,
  });

  return (
    <Polyline pathOptions={fillBlueOptions} positions={position} />
  );
});
