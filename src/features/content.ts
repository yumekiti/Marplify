import { createSlice } from '@reduxjs/toolkit';

export type Content = {
  content: string;
};

export type ContentState = Content;

const initialState: ContentState = {
  content: '',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});
