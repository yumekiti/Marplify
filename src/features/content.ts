import { createSlice } from '@reduxjs/toolkit';

export type Content = {
  content: string;
  theme: string;
};

export type ContentState = Content;

const initialState: ContentState = {
  content: '',
  theme: '',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
