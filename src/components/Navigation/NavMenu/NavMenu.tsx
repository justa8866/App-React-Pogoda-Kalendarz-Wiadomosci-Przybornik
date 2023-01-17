import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { logout } from '../../../store/auth/authSlice';
import {
  toggleProfileMenuChange,
  selectMenu,
} from '../../../store/menu/menuSlice';

function NavMenu(): JSX.Element {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { isProfileMenuOpen } = useSelector(selectMenu);

  const renderMenu = (
    <Menu
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={t('header:idSearchAcountMenu')}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isProfileMenuOpen}
      onClose={() => dispatch(toggleProfileMenuChange())}
    >
      <MenuItem onClick={() => dispatch(toggleProfileMenuChange())}>
        {t('header:textProfile')}
      </MenuItem>
      <MenuItem onClick={() => dispatch(toggleProfileMenuChange())}>
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
