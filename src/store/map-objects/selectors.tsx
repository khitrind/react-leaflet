import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/store/reducers';

export const mapObjectsSelector = (state: RootState) => state.mapObjectsReducer;

export const isItemSelectedSelector = createSelector(
  mapObjectsSelector,
  ({ selectedItem }) => selectedItem
);


export const itemsOrderSelector = createSelector(
  mapObjectsSelector,
  ({ itemsOrder }) => itemsOrder
);


export const itemsDataSelector = createSelector(
  mapObjectsSelector,
  ({ itemsOrder }) => itemsOrder
);
