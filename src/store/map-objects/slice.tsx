import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapObjectData, ItemType } from 'src/types';

type OrderInfo = {
  id: string;
  type: ItemType;
}

type State = {
  itemsOrder: OrderInfo[];
  items: Record<string, MapObjectData>;
  selectedItem: string | undefined;
}

const initialState: State = {
  itemsOrder: [],
  items: {},
  selectedItem: undefined,
};

const mapObjectsSlice = createSlice({
  initialState,
  name: 'mapObjectsReducer',
  reducers: {
    setSelectedItem: (state, { payload }: PayloadAction<string>) => {
      if (state.items[payload]) {
        state.selectedItem = payload;
      }
    },

    clearSelectedItem: (state) => {
      state.selectedItem = undefined;
    },

    addMapObject: (state, { payload }: PayloadAction<MapObjectData>) => {
      state.items[payload.id] = payload;
      state.itemsOrder.push({
        id: payload.id,
        type: payload.type,
      });
    },
  }
});

export const { reducer: mapObjectsReducer } = mapObjectsSlice;

export const { setSelectedItem, clearSelectedItem, addMapObject } = mapObjectsSlice.actions;
