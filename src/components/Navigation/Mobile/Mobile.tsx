import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTranslation } from 'react-i18next';

import { MenuNav } from './Mobile.style';
import MenuElement from '../Element/Element';
import { NavActionKind, useNav } from '../Reducer/Nav';

function MobileNavMenu(): JSX.Element {
  const [t] = useTranslation();
  const [state, dispatch] = useNav();

  const renderMobileMenu = (
    <MenuNav
      anchorEl={state.mobileMenuAnchorEl}
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
      open={!!state.mobileMenuAnchorEl}
      onClose={() => dispatch({
        type: NavActionKind.mobileMenuAnchorElSet,
        payload: null,
      })}
    >
      <MenuElement
        label={t('header.textMessages')}
        badgeNumber={4}
        icon={<MailIcon />}
        text={t('header.textMessages')}
      />
      <MenuElement
        label={t('header.textNotifications')}
        badgeNumber={17}
        icon={<NotificationsIcon />}
        text={t('header.textNotifications')}
      />
      <MenuElement
        onClick={(event) => dispatch({
          type: NavActionKind.profileMenuAnchorElSet,
          payload: event.currentTarget,
        })}
        label={t('header.textAccount')}
        badgeNumber={17}
        icon={<AccountCircle />}
        text={t('header.textProfile')}
      />
    </MenuNav>
  );

  return renderMobileMenu;
}

export default MobileNavMenu;
