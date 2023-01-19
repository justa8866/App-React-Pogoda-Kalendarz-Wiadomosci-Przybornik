import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../../store/auth/authSlice';
import { IUser } from '../../types/user/IUser.type';
import {
  setMobileMenuAnchorEl,
  setProfileMenuAnchorEl,
} from '../../store/menu/menuSlice';
import { useAppDispatch } from '../../store/hooks';

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

function Header(): JSX.Element {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { isLoggedIn }: IUser = useSelector(selectUser);

  const handleProfileMenuOpen = (event: { currentTarget: any }) => {
    if (!isLoggedIn) {
      window.location.href = RoutesList.Login;
    }

    dispatch(setProfileMenuAnchorEl(event.currentTarget));
  };

  return (
    <Container>
      <Wrapper>
        <ToolbarContainer>
          <AppName>{t('header:name')}</AppName>
          <SearchElement inputProps={{ ariaLabel: 'search' }} />
          <AdditionalSpaceBetweenElements />
          <IconsWrapper>
            <Icon label="mails" badgeNumber={4} icon={<MailIcon />} />
            <Icon
              label="notifications"
              badgeNumber={17}
              icon={<NotificationsIcon />}
            />
            <Icon
              onClick={handleProfileMenuOpen}
              label="account of current user"
              badgeNumber={17}
              icon={<AccountCircle />}
              edge="end"
              ariaControls="account-profile-menu"
              ariaHaspopup
            />
          </IconsWrapper>
          <LanguageSelector />
          <ShowMoreElement
            label="show more"
            ariaControls="search-account-menu-show-more"
            onClick={(event) => dispatch(setMobileMenuAnchorEl(event.currentTarget))}
          />
        </ToolbarContainer>
      </Wrapper>
      <Navigation />
    </Container>
  );
}

export default Header;
