/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/user/IUser.types';
import type { RootState } from '../store';

const initialState: IUser = {
  isLoading: false,
  isLoggedIn: false,
  username: '',
  token: '',
  role: 'user',
  authenticationError: '',
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    signin: (state, reducer) => {
      const { user } = reducer.payload;
      state.isLoggedIn = true;
      state.username = user.email;
      state.token = user.accessToken;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { logout, signin } = userSlice.actions;

export default userSlice.reducer;
