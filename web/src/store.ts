import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { contentSlice, ContentState } from './features/content';
import { viewSlice, ViewState } from './features/view';
import { userSlice, UserState } from './features/user';

export type RootState = {
  content: ContentState;
  view: ViewState;
  user: UserState;
};

const rootReducer = combineReducers<RootState>({
  content: contentSlice.reducer,
  view: viewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
