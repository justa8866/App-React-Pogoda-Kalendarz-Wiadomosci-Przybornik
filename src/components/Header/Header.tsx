import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/authSlice';
import { IUser } from '../../types/user/IUser.type';
import { handleMobileMenuChange, handleProfileMenuChange } from '../../store/menu/menuSlice';
import { useAppDispatch } from '../../store/hooks';

import {
  Search,
  SearchIconWrapper,
  BoxNew,
  AppBarNew,
  ToolbarNew,
  TypographyNew,
  StyledInputBaseNew,
  BoxNewOne,
  IconButtonFour,
  IconButtonFive,
  IconButtonSix,
  BoxNewTwo,
  IconButtonSeven,
} from './Header.style';
import RoutesList from '../../navigation/routes';
import Navigation from '../Navigation/Navigation';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoggedIn }: IUser = useSelector(selectUser);

  const handleProfileMenuOpen = () => {
    if (!isLoggedIn) {
      window.location.href = RoutesList.Login;
    }

    dispatch(handleProfileMenuChange());
  };

  return (
    <BoxNew>
      <AppBarNew>
        <ToolbarNew>
          <TypographyNew>KIT</TypographyNew>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBaseNew />
          </Search>
          <BoxNew />
          <BoxNewOne>
            <IconButtonFour>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButtonFour>
            <IconButtonFive>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButtonFive>
            <IconButtonSix onClick={handleProfileMenuOpen}>
              <AccountCircle />
            </IconButtonSix>
          </BoxNewOne>
          <BoxNewTwo>
            <IconButtonSeven onClick={() => dispatch(handleMobileMenuChange())}>
              <MoreIcon />
            </IconButtonSeven>
          </BoxNewTwo>
        </ToolbarNew>
      </AppBarNew>
      <Navigation />
    </BoxNew>
  );
}

export default Header;
