import { createSlice } from '@reduxjs/toolkit';

export type View = {
  mode: string;
  loginModal: boolean;
  registerModal: boolean;
  sidebar: boolean;
  editing: string;
};

export type ViewState = View;

const initialState: ViewState = {
  mode: 'both',
  loginModal: false,
  registerModal: false,
  sidebar: localStorage.getItem('sidebar') === 'true' ? true : false,
  editing: '',
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
      localStorage.setItem('sidebar', state.sidebar.toString());
    },
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
  },
});
