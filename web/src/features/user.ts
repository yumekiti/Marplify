import { createSlice } from '@reduxjs/toolkit';

export type User = {
  username: string;
  email: string;
};

export type UserState = User;

const initialState: UserState = {
  username: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});
