import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { logout } from '../../../store/auth/authSlice';
import {
  setProfileMenuAnchorEl,
  selectMenu,
} from '../../../store/menu/menuSlice';

function NavMenu(): JSX.Element {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { profileMenuAnchorEl } = useSelector(selectMenu);

  const renderMenu = (
    <Menu
      anchorEl={profileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="account-menu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={!!profileMenuAnchorEl}
      onClose={() => dispatch(setProfileMenuAnchorEl(null))}
    >
      <MenuItem onClick={(event) => dispatch(setProfileMenuAnchorEl(event.currentTarget))}>
        {t('header:textProfile')}
      </MenuItem>
      <MenuItem onClick={(event) => dispatch(setProfileMenuAnchorEl(event.currentTarget))}>
        {t('header:textMyAccount')}
      </MenuItem>
      <MenuItem onClick={() => dispatch(logout())}>
        {t('header:textLogout')}
      </MenuItem>
    </Menu>
  );

  return renderMenu;
}

export default NavMenu;
