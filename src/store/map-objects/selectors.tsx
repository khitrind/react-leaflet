import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/reducers';
import {ItemType} from 'src/types';
import {assertIsDefined} from 'src/utils/assetions';

export const mapObjectsSelector = (state: RootState) => state.mapObjectsReducer;

export const isItemSelectedSelector = createSelector(mapObjectsSelector, ({selectedItem}) => selectedItem);

export const itemsOrderSelector = createSelector(mapObjectsSelector, ({itemsOrder}) => itemsOrder);

export const itemsDataSelector = createSelector(mapObjectsSelector, ({items}) => items);

const typeSafeItemDataSelector = (state: RootState, id: string, type: ItemType) => {
  const item = itemsDataSelector(state)[id];

  assertIsDefined(item, `item with id '${id}' not found`);

  if (type !== item.type) {
    throw new Error(`expects item.type '${type}' but got '${item.type}'`);
  }

  return item;
};

export const listItemParamsSelector = (state: RootState, id: string, type: ItemType) => {
  const item = typeSafeItemDataSelector(state, id, type);

  return {
    item,
    isActive: state.mapObjectsReducer.selectedItem === id,
  };
};

export const isAddModeEnabledselector = createSelector(mapObjectsSelector, ({isAddModeEnabled}) => isAddModeEnabled);
