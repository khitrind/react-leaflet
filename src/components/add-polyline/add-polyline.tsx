import {memo, useMemo} from 'react';
import {Polyline, useMapEvents} from 'react-leaflet';
import {useClickAndDoubleClick} from 'src/utils/use-click-and-double-click';
import {CreateObjectCallback} from './types';

import {useAddPolyline} from './use-add-polyline';

const fillBlueOptions = {color: 'green'};

type Props = {
  onObjectCreated: CreateObjectCallback;
};

export const AddPolyline = memo(({onObjectCreated}: Props) => {
  const {position, handleClick, handleDoubleClick} = useAddPolyline(onObjectCreated);

  const {onClick, onDoubleClick} = useClickAndDoubleClick({
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
  });

  const eventHandlerMap = useMemo(
    () => ({
      click: onClick,
      dblclick: onDoubleClick,
    }),
    [onClick, onDoubleClick],
  );

  useMapEvents(eventHandlerMap);

  return <Polyline pathOptions={fillBlueOptions} positions={position} />;
});
