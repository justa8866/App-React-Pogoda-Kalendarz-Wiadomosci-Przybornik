import React from 'react';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';

import {
  toggleMobileMenuChange,
  toggleProfileMenuChange,
  selectMenu,
} from '../../../store/menu/menuSlice';

import { MenuNav } from './MobileNavMenu.style';
import MenuElement from './MenuElement/MenuElement';

function MobileNavMenu(): JSX.Element {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useSelector(selectMenu);

  const renderMobileMenu = (
    <MenuNav
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={t('header:idSearchAcountMenuMobile')}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={() => dispatch(toggleMobileMenuChange())}
    >
      <MenuElement
        label={t('header:messageMail')}
        badgeNumber={4}
        icon={<MailIcon />}
        text={t('header:textMessages')}
      />
      <MenuElement
        label={t('header:messageNotifications')}
        badgeNumber={17}
        icon={<NotificationsIcon />}
        text={t('header:textNotifications')}
      />
      <MenuElement
        onClick={() => dispatch(toggleProfileMenuChange())}
        label={t('header:messageAccountCircle')}
        badgeNumber={17}
        icon={<AccountCircle />}
        text={t('header:textProfile')}
      />
    </MenuNav>
  );

  return renderMobileMenu;
}

export default MobileNavMenu;
