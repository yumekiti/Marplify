import { createSlice } from '@reduxjs/toolkit';

export type View = {
  mode: string;
  modal: boolean;
  sidebar: boolean;
};

export type ViewState = View;

const initialState: ViewState = {
  mode: 'both',
  modal: false,
  sidebar: false,
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});
