import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { MenuName } from "@/types/homepage";

interface IInitialState {
  pageMode: MenuName;
}

const initialState: IInitialState = {
  pageMode: MenuName.Home,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    clear: () => initialState,
    setPageMode: (state, action: PayloadAction<MenuName>) => {
      state.pageMode = action.payload;
    },
  },
});

export const actions = {
  ...homepageSlice.actions,
};

export const { reducer } = homepageSlice;
