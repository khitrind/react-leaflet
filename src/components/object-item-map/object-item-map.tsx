import { ComponentType } from 'react';
import { ItemType } from 'src/types';
import { PolylineItemAdapter } from '../polyline-item/polyline-item-adapter';

type ComponentProps = {
  id: string;
};

type ComponentFactory = (
  type: ItemType,
) =>  null | ComponentType<ComponentProps>;

const TYPE_TO_COMPONENT = {
  polyline: PolylineItemAdapter
} as const;


export const getMapObjectComponent: ComponentFactory = (type: ItemType) => {
  return TYPE_TO_COMPONENT[type] || null;
};
