import {memo, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {listItemParamsSelector} from 'src/store/map-objects/selectors';
import {setSelectedItem} from 'src/store/map-objects/slice';
import {useAppSelector} from 'src/store/store';
import {ItemType} from 'src/types';
import {deepEqual} from 'src/utils/deepEqual';
import {PolylineItem} from './polyline-item';

type Props = {
  id: string;
};

export const PolylineItemAdapter = memo(({id}: Props) => {
  const {item, isActive} = useAppSelector((state) => listItemParamsSelector(state, id, ItemType.Polyline), deepEqual);

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setSelectedItem(id));
  }, [dispatch, id]);

  return <PolylineItem isActive={isActive} position={item.position} id={item.id} onClick={handleClick} />;
});
