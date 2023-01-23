import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { logout } from '../../../store/auth/authSlice';
import { NavActionKind, useNav } from '../Reducer/Nav';

function Profile(): JSX.Element {
  const [t] = useTranslation();
  const [state, dispatch] = useNav();
  const reduxDispatch = useAppDispatch();

  const renderMenu = (
    <Menu
      anchorEl={state.profileMenuAnchorEl}
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
      open={!!state.profileMenuAnchorEl}
      onClose={() => dispatch({
        type: NavActionKind.profileMenuAnchorElSet,
        payload: null,
      })}
    >
      <MenuItem>{t('header.textProfile')}</MenuItem>
      <MenuItem>{t('header.textMyAccount')}</MenuItem>
      <MenuItem onClick={() => reduxDispatch(logout())}>
        {t('header.textLogout')}
      </MenuItem>
    </Menu>
  );

  return renderMenu;
}

export default Profile;
