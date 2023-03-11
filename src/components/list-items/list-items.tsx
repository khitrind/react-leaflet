import { memo, useMemo } from 'react';
import { ListItem } from '../list-item/list-item';


type Props = {
  items?: string[];
}

export const ListItems = memo(({ items }: Props) => {

  const itemsList = useMemo(() => {
    if (!items || items.length === 0) {
      return null;
    }

    return items.map((value, idx) => (
      <ListItem key={idx} name={value} />
    ));
  }, []);


  return (
    <div>
      {itemsList}
    </div>
  );
});
