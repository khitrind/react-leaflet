import {memo, useMemo} from 'react';
import {Polyline, useMapEvents} from 'react-leaflet';
import {useClickAndDoubleClick} from 'src/hooks/use-click-and-double-click';
import {CreateObjectCallback} from './types';

import {useAddPolyline} from './use-add-polyline';

const pathOptions = {color: 'green'};

type Props = {
  onObjectCreated: CreateObjectCallback;
};

export const AddPolyline = memo(({onObjectCreated}: Props) => {
  const {position, handleAddPoint, handleAddLine} = useAddPolyline(onObjectCreated);

  const {onClick, onDoubleClick} = useClickAndDoubleClick({
    onClick: handleAddPoint,
    onDoubleClick: handleAddLine,
  });

  const eventHandlerMap = useMemo(
    () => ({
      click: onClick,
      dblclick: onDoubleClick,
    }),
    [onClick, onDoubleClick],
  );

  useMapEvents(eventHandlerMap);

  return <Polyline pathOptions={pathOptions} positions={position} />;
});
