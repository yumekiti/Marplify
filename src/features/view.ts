import { createSlice } from '@reduxjs/toolkit';

export type View = {
  mode: string;
};

export type ViewState = View;

const initialState: ViewState = {
  mode: 'both',
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
