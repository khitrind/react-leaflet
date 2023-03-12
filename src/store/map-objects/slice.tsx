import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemData, ItemType } from 'src/types';

type OrderInfo = {
  id: string;
  type: ItemType;
}

type State = {
  itemsOrder: OrderInfo[];
  items: Record<string, ItemData>;
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

    addMapObject: (state, { payload }: PayloadAction<ItemData>) => {
      state.items[payload.id] = payload;
      state.itemsOrder.push({
        id: payload.id,
        type: payload.type,
      });
    },

    removeItem: (state, { payload }: PayloadAction<string>) => {
      if (!state.items[payload]) {
        return;
      }

      const index = state.itemsOrder.findIndex(({id}) => id === payload);
      if (index !== -1) {
        state.itemsOrder.splice(index, 1);
      }

      delete state.items[payload];
    },
  }
});

export const { reducer: mapObjectsReducer } = mapObjectsSlice;

export const { setSelectedItem, clearSelectedItem, addMapObject, removeItem } = mapObjectsSlice.actions;
