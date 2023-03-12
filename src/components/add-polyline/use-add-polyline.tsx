import {LatLngTuple, LeafletMouseEvent} from 'leaflet';
import {useCallback, useState} from 'react';
import {convertLatLngToTuple} from 'src/utils/convert-lat-lng-to-tuple';
import {CreateObjectCallback} from './types';

export const useAddPolyline = (cb: CreateObjectCallback) => {
  const [position, setPosition] = useState<LatLngTuple[]>([]);

  const handleAddPoint = useCallback((e: LeafletMouseEvent) => {
    setPosition((pos) => [...pos, convertLatLngToTuple(e.latlng)]);
  }, []);

  const handleAddLine = useCallback(() => {
    if (position.length <= 1) {
      setPosition([]);
      return;
    }
    cb([...position]);
    setPosition([]);
  }, [cb, position]);

  return {position, handleAddPoint, handleAddLine};
};
