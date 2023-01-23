/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/user/IUser.type';
import type { RootState } from '../store';

const initialState: IUser = {
  isLoading: false,
  isLoggedIn: false,
  username: '',
  token: '',
  role: '',
  authenticationError: '',
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    signin: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { logout, signin } = userSlice.actions;

export default userSlice.reducer;
