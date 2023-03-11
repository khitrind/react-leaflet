import { AnyAction, configureStore, PreloadedState, ThunkDispatch, Store } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import { rootReducer } from './reducers';

export function createStore(preloadedState?: PreloadedState<RootState>) {

  const isProduction = process.env.NODE_ENV === 'production';

  const store = configureStore({
    devTools: !isProduction,
    preloadedState,
    reducer: rootReducer
  });

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch;
};
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
