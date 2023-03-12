import {memo} from 'react';
import {ItemType} from 'src/types';
import {getMapObjectComponent} from 'src/components/object-item-map';

type Props = {
  id: string;
  type: ItemType;
};

export const MapItem = memo(({id, type}: Props) => {
  const Component = getMapObjectComponent(type);

  if (!Component) {
    console.error(`Component doesn't exist for type ${type}`);
    return null;
  }

  return <Component id={id} />;
});
