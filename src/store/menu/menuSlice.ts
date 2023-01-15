import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  isProfileMenuOpen: false,
  isMobileMenuOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMobileMenuChange: (state) => {
      const stateValue = { ...state };
      stateValue.isMobileMenuOpen = !state.isMobileMenuOpen;

      return stateValue;
    },
    handleProfileMenuChange: (state) => {
      const stateValue = { ...state };
      stateValue.isProfileMenuOpen = !state.isProfileMenuOpen;

      return stateValue;
    },
  },
});

export const selectMenu = (state: RootState) => state.menu;

export const { handleMobileMenuChange, handleProfileMenuChange } = menuSlice.actions;

export default menuSlice.reducer;
