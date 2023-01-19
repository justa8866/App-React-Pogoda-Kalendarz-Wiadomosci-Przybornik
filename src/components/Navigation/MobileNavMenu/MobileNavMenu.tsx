import React from 'react';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';

import {
  setMobileMenuAnchorEl,
  setProfileMenuAnchorEl,
  selectMenu,
} from '../../../store/menu/menuSlice';

import { MenuNav } from './MobileNavMenu.style';
import MenuElement from './MenuElement/MenuElement';

function MobileNavMenu(): JSX.Element {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { mobileMenuAnchorEl } = useSelector(selectMenu);

  const renderMobileMenu = (
    <MenuNav
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="search-account-menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={!!mobileMenuAnchorEl}
      onClose={() => dispatch(setMobileMenuAnchorEl(null))}
    >
      <MenuElement
        label="mails"
        badgeNumber={4}
        icon={<MailIcon />}
        text={t('header:textMessages')}
      />
      <MenuElement
        label="notifications"
        badgeNumber={17}
        icon={<NotificationsIcon />}
        text={t('header:textNotifications')}
      />
      <MenuElement
        onClick={(event) => dispatch(setProfileMenuAnchorEl(event.currentTarget))}
        label="account of current user"
        badgeNumber={17}
        icon={<AccountCircle />}
        text={t('header:textProfile')}
      />
    </MenuNav>
  );

  return renderMobileMenu;
}

export default MobileNavMenu;
