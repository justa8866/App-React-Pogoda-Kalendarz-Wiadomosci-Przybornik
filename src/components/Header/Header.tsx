import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import {
  Search,
  SearchIconWrapper,
  IconButtonNew,
  IconButtonNewOne,
  IconButtonNewTwo,
  BoxNew,
  AppBarNew,
  TypographyNew,
  StyledInputBaseNew,
  BoxNewOne,
  IconButtonFour,
  IconButtonFive,
  IconButtonSix,
  BoxNewTwo,
  IconButtonSeven,
  SwitchNew,
} from './Header.style';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [auth, setAuth] = React.useState(true);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButtonNewTwo>
          <AccountCircle />
        </IconButtonNewTwo>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <BoxNew>
      <AppBarNew>
        <Toolbar>
          <FormGroup>
            <FormControlLabel
              control={(
                <SwitchNew
                  checked={auth}
                  onChange={handleChange}
                />
              )}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
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
            <IconButtonSeven onClick={handleMobileMenuOpen}>
              <MoreIcon />
            </IconButtonSeven>
          </BoxNewTwo>
        </Toolbar>
      </AppBarNew>
      {renderMobileMenu}
      {renderMenu}
    </BoxNew>
  );
}
