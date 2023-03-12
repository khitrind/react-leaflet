import {LatLngTuple, LeafletMouseEvent} from 'leaflet';
import {useCallback, useState} from 'react';
import {convertLatLngToTuple} from 'src/utils/convert-lat-lng-to-tuple';
import {CreateObjectCallback} from './types';

export const useAddPolyline = (cb: CreateObjectCallback) => {
  const [position, setPosition] = useState<LatLngTuple[]>([]);

  const handleClick = useCallback((e: LeafletMouseEvent) => {
    setPosition((pos) => [...pos, convertLatLngToTuple(e.latlng)]);
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (position.length <= 1) {
      setPosition([]);
      console.error('Not completed');
      return;
    }
    cb([...position]);
    setPosition([]);
  }, [cb, position]);

  return {position, handleClick, handleDoubleClick};
};
