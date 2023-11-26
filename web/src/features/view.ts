import { createSlice } from '@reduxjs/toolkit';

export type View = {
  mode: string;
  loginModal: boolean;
  sidebar: boolean;
};

export type ViewState = View;

const initialState: ViewState = {
  mode: 'both',
  loginModal: false,
  sidebar: false,
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});
