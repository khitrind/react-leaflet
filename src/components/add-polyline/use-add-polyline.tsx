import { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import { useCallback, useState } from 'react';
import { CreateObjectCallback } from './types';




export const useAddPolyline = (cb: CreateObjectCallback) => {
  const [position, setPosition] = useState<LatLngExpression[]>([]);

  const handleClick = useCallback((e: LeafletMouseEvent) => {
    setPosition((pos) => [...pos, e.latlng]);
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (position.length <= 1) {
      // should fire popup with question
      console.error('Not completed');
      return;
    }
    cb(position);
  }, []);



  return { position, handleClick, handleDoubleClick };
};
