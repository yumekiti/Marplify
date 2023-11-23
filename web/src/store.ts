import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { contentSlice, ContentState } from './features/content';
import { viewSlice, ViewState } from './features/view';

export type RootState = {
  content: ContentState;
  view: ViewState;
};

const rootReducer = combineReducers<RootState>({
  content: contentSlice.reducer,
  view: viewSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
