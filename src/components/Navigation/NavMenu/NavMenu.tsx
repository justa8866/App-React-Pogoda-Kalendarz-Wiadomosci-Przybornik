import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { logout } from '../../../store/auth/authSlice';
import {
  handleProfileMenuChange,
  selectMenu,
} from '../../../store/menu/menuSlice';

function NavMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isProfileMenuOpen } = useSelector(selectMenu);

  const renderMenu = (
    <Menu
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isProfileMenuOpen}
      onClose={() => dispatch(handleProfileMenuChange())}
    >
      <MenuItem onClick={() => dispatch(handleProfileMenuChange())}>
        Profile
      </MenuItem>
      <MenuItem onClick={() => dispatch(handleProfileMenuChange())}>
        My account
      </MenuItem>
      <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
    </Menu>
  );

  return renderMenu;
}

export default NavMenu;
