/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IMenuState {
  profileMenuAnchorEl: null | HTMLElement,
  mobileMenuAnchorEl: null | HTMLElement,
}

const initialState: IMenuState = {
  profileMenuAnchorEl: null,
  mobileMenuAnchorEl: null,
};

export const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setProfileMenuAnchorEl: (state, el) => {
      state.profileMenuAnchorEl = el.payload;
    },
    setMobileMenuAnchorEl: (state, el) => {
      state.mobileMenuAnchorEl = el.payload;
    },
  },
});

export const selectMenu = (state: RootState) => state.menu;

export const { setProfileMenuAnchorEl, setMobileMenuAnchorEl } = utilSlice.actions;

export default utilSlice.reducer;
