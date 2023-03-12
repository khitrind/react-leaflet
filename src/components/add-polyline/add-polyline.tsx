import { memo, useMemo } from 'react';
import { Polyline, useMapEvents } from 'react-leaflet';
import { CreateObjectCallback } from './types';

import { useAddPolyline } from './use-add-polyline';

const fillBlueOptions = { fillColor: 'blue' };

type Props = {
  onObjectCreated: CreateObjectCallback;
};

export const AddPolyline = memo(({ onObjectCreated }: Props) => {
  const { position, handleClick, handleDoubleClick } =
    useAddPolyline(onObjectCreated);

  const eventHandlerMap = useMemo(
    () => ({
      click: handleClick,
      dblclick: handleDoubleClick,
    }),
    [handleClick, handleDoubleClick]
  );

  useMapEvents(eventHandlerMap);

  return <Polyline pathOptions={fillBlueOptions} positions={position} />;
});
