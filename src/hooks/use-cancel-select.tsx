import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {clearSelectedItem} from 'src/store/map-objects/slice';
import {useKeyboard, Key} from 'src/hooks/use-keyboard';

const KEYS = ['Escape'] as Key[];

export const useCanelSelect = () => {
  const dispatch = useDispatch();

  const handleCancelSelect = useCallback(() => {
    dispatch(clearSelectedItem());
  }, [dispatch]);

  useKeyboard(handleCancelSelect, KEYS);
};
