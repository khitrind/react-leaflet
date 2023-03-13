import {LatLngTuple, LeafletMouseEvent} from 'leaflet';
import {useCallback, useState} from 'react';
import {convertLatLngToTuple} from 'src/utils/convert-lat-lng-to-tuple';
import {CreateObjectCallback} from './types';

export const useAddPolyline = (cb: CreateObjectCallback) => {
  const [position, setPosition] = useState<LatLngTuple[]>([]);

  const handleAddPoint = useCallback((e: LeafletMouseEvent) => {
    setPosition((pos) => [...pos, convertLatLngToTuple(e.latlng)]);
  }, []);

  const handleAddLine = useCallback(
    (e: LeafletMouseEvent) => {
      if (position.length === 0) {
        return;
      }

      cb([...position, convertLatLngToTuple(e.latlng)]);
      setPosition([]);
    },
    [cb, position],
  );

  return {position, handleAddPoint, handleAddLine};
};
