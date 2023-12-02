import { createSlice } from '@reduxjs/toolkit';

export type View = {
  mode: string;
  loginModal: boolean;
  registerModal: boolean;
  sidebar: boolean;
};

export type ViewState = View;

const initialState: ViewState = {
  mode: 'both',
  loginModal: false,
  registerModal: false,
  sidebar: false,
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    resetModal: (state) => {
      state.loginModal = false;
      state.registerModal = false;
    },
    toggleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },
    toggleRegisterModal: (state) => {
      state.registerModal = !state.registerModal;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});
