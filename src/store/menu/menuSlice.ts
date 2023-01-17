/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  isProfileMenuOpen: false,
  isMobileMenuOpen: false,
};

export const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    toggleMobileMenuChange: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    toggleProfileMenuChange: (state) => {
      state.isProfileMenuOpen = !state.isProfileMenuOpen;
    },
  },
});

export const selectMenu = (state: RootState) => state.menu;

export const { toggleMobileMenuChange, toggleProfileMenuChange } = utilSlice.actions;

export default utilSlice.reducer;
