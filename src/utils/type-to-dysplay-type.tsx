import { ItemType } from 'src/types';

const TYPE_TO_DISPLAY_TYPE: Record<ItemType, string> = {
  [ItemType.Polyline]: 'LineString',
};

export const convertTypeToDysplayType = (type: ItemType) => {
  return TYPE_TO_DISPLAY_TYPE[type];
};
