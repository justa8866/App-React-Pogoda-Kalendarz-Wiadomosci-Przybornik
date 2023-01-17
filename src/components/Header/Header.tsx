import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../../store/auth/authSlice';
import { IUser } from '../../types/user/IUser.type';
import {
  toggleMobileMenuChange,
  toggleProfileMenuChange,
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

function Header(): JSX.Element {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { isLoggedIn }: IUser = useSelector(selectUser);

  const handleProfileMenuOpen = () => {
    if (!isLoggedIn) {
      window.location.href = RoutesList.Login;
    }

    dispatch(toggleProfileMenuChange());
  };

  return (
    <Container>
      <Wrapper>
        <ToolbarContainer>
          <AppName>{t('header:name')}</AppName>
          <SearchElement
            placeholder={t('header:placeholderSearch')}
            inputProps={{ ariaLabel: t('header:labelSearch') }}
          />
          <AdditionalSpaceBetweenElements />
          <IconsWrapper>
            <Icon
              label={t('header:messageMail')}
              badgeNumber={4}
              icon={<MailIcon />}
            />
            <Icon
              label={t('header:messageNotifications')}
              badgeNumber={17}
              icon={<NotificationsIcon />}
            />
            <Icon
              onClick={handleProfileMenuOpen}
              label={t('header:messageAccountCircle')}
              badgeNumber={17}
              icon={<AccountCircle />}
              edge="end"
              ariaControls={t('header:idSearchAcountMenu')}
              ariaHaspopup
            />
          </IconsWrapper>
          <ShowMoreElement
            label="show more"
            ariaControls={t('header:idSearchAcountMenu')}
            onClick={() => dispatch(toggleMobileMenuChange())}
          />
        </ToolbarContainer>
      </Wrapper>
      <Navigation />
    </Container>
  );
}

export default Header;
