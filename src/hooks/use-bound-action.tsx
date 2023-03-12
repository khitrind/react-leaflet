import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

type UseBoundAction = {
  <I extends any[], R>(actionCreator: (...args: I) => R): (...args: I) => R;
};

/**
 * Wrap actionCreator to dispatch
 */
export const useBoundAction: UseBoundAction = (
  actionCreator: (...args: any[]) => any
) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-undef
  return useCallback(
    (...arg: any) => dispatch(actionCreator(...arg)),
    [dispatch, actionCreator]
  );
};
