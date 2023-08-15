import { createSlice } from '@reduxjs/toolkit';

export type Content = {
  content: string;
  theme: string;
};

export type ContentState = Content;

const initialState: ContentState = {
  content: localStorage.getItem('content') || '',
  theme: localStorage.getItem('theme') || 'default',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
      localStorage.setItem('content', action.payload);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});
