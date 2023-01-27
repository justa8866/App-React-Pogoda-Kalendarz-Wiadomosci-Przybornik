import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../../store/auth/authSlice';
import { IUser } from '../../types/user/IUser.types';

import {
  Container,
  AdditionalSpaceBetweenElements,
  ToolbarContainer,
  Wrapper,
  AppName,
  IconsWrapper,
} from './Header.style';
import RoutesList from '../../navigation/routes';
import Navigation from '../Navigation/Navigation';
import SearchElement from './SearchElement/SearchElement';
import Icon from './Icon/Icon';
import ShowMoreElement from './ShowMoreElement/ShowMoreElement';
import LanguageSelector from '../../common/LanguageSelector/LanguageSelector';
import { NavActionKind, useNav } from '../Navigation/Reducer/Nav';

function Header(): JSX.Element {
  const [t] = useTranslation();
  const { isLoggedIn }: IUser = useSelector(selectUser);
  const [, dispatch] = useNav();

  const handleProfileMenuOpen = (event: { currentTarget: HTMLElement }) => {
    if (!isLoggedIn) {
      window.location.href = RoutesList.Auth;

      return;
    }

    dispatch({
      type: NavActionKind.profileMenuAnchorElSet,
      payload: event.currentTarget,
    });
  };

  return (
    <Container>
      <Wrapper>
        <ToolbarContainer>
          <AppName>{t('header.name')}</AppName>
          <SearchElement inputProps={{ ariaLabel: t('header.textSearch') }} />
          <AdditionalSpaceBetweenElements />
          <IconsWrapper>
            <Icon
              label={t('header.textMessages')}
              badgeNumber={4}
              icon={<MailIcon />}
            />
            <Icon
              label={t('header.textNotifications')}
              badgeNumber={17}
              icon={<NotificationsIcon />}
            />
            <Icon
              onClick={handleProfileMenuOpen}
              label={t('header.textNotifications')}
              badgeNumber={17}
              icon={<AccountCircle />}
              edge="end"
              ariaControls="account-profile-menu"
              ariaHaspopup
            />
          </IconsWrapper>
          <LanguageSelector />
          <ShowMoreElement
            label={t('header.textShowMore')}
            ariaControls="search-account-menu-show-more"
            onClick={(event) => dispatch({
              type: NavActionKind.mobileMenuAnchorElSet,
              payload: event.currentTarget,
            })}
          />
        </ToolbarContainer>
      </Wrapper>
      <Navigation />
    </Container>
  );
}

export default Header;
