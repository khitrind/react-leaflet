import {AnyAction, configureStore, PreloadedState, ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

import {rootReducer} from './reducers';

export type RootState = ReturnType<typeof rootReducer>;

type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  const isProduction = process.env.NODE_ENV === 'production';

  const store = configureStore({
    devTools: !isProduction,
    preloadedState,
    reducer: rootReducer,
  });

  return store;
};
