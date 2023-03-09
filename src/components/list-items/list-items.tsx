import { memo } from 'react';
import { ListItem } from '../list-item/list-item';

type Props = {
  items?: string[];
}

export const ListItems = memo(({ items }: Props) => {

  if (!items || items.length === 0) {
    return null;
  }


  return (
    <div>
      {items.map((value, idx) => (
        <ListItem key={idx} name={value} />
      ))}
    </div>
  );
});
