import React from 'react';
import { useSelector } from 'react-redux';
import { Badge, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAppDispatch } from '../../../store/hooks';

import {
  handleMobileMenuChange,
  handleProfileMenuChange,
  selectMenu,
} from '../../../store/menu/menuSlice';

import {
  IconButtonNew,
  IconButtonNewOne,
  IconButtonNewTwo,
  MenuNav,
} from './MobileNavMenu.style';

function MobileNavMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useSelector(selectMenu);

  const renderMobileMenu = (
    <MenuNav
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={() => dispatch(handleMobileMenuChange())}
    >
      <MenuItem>
        <IconButtonNew>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButtonNew>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButtonNewOne>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButtonNewOne>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={() => dispatch(handleProfileMenuChange())}>
        <IconButtonNewTwo>
          <AccountCircle />
        </IconButtonNewTwo>
        <p>Profile</p>
      </MenuItem>
    </MenuNav>
  );

  return renderMobileMenu;
}

export default MobileNavMenu;
