import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {addMapObject} from 'src/store/map-objects/slice';
import {ItemData, ItemType, ItemTypeToData, PolylineData} from 'src/types';

import {assertIs} from 'src/utils/assetions';

type Validator<Type extends ItemType> = (data: ItemTypeToData[Type]) => boolean;

const VALIDATORS_MAP: Record<ItemType, Validator<ItemType>> = {
  [ItemType.Polyline]: (data: PolylineData) => {
    if (data.type === ItemType.Polyline && data.position.length >= 2) {
      return true;
    }

    return false;
  },
};

export const useAddValidateMapObject = () => {
  const dispatch = useDispatch();

  const handelAddMapObject = useCallback(
    (data: ItemData) => {
      const validator = VALIDATORS_MAP[data.type];

      try {
        assertIs(validator && validator(data), `Invalid map object: ${data.type}`);
        dispatch(addMapObject(data));
      } catch (e) {
        console.error(e, data);
      }
    },
    [dispatch],
  );

  return handelAddMapObject;
};
