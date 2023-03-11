import { combineReducers, Reducer } from '@reduxjs/toolkit';

type GetStateFromReducers<TReducers> = {
  [K in keyof TReducers]: TReducers[K] extends Reducer<infer ReducerState> ? ReducerState : never;
};

const reducers = {

};

export const rootReducer = combineReducers(reducers);

export type RootState = GetStateFromReducers<typeof reducers>
