import {combineReducers, Reducer} from '@reduxjs/toolkit';
import {mapObjectsReducer} from './map-objects';

type GetStateFromReducers<TReducers> = {
  [K in keyof TReducers]: TReducers[K] extends Reducer<infer ReducerState> ? ReducerState : never;
};

const reducers = {
  mapObjectsReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = GetStateFromReducers<typeof reducers>;
