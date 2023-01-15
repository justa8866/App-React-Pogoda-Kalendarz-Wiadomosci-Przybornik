import {
  InputBase,
  Toolbar,
  Box,
  AppBar,
  Typography,
  IconButton,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  placeholder: 'Search…',
  inputProps: { ariaLabel: 'search' },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBaseNew = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const ToolbarNew = styled(Toolbar)({
  columnGap: '10px',
});

export const BoxNew = styled(Box)({
  flexGrow: '1',
});

export const AppBarNew = styled(AppBar)({
  position: 'static',
  background: 'rgba(8, 23, 96, 0.8)',
});

export const TypographyNew = styled(Typography)(({ theme }) => ({
  variant: theme.typography.h6 && {
    whiteSpace: 'nowrap',
    component: 'div',
    marginRight: '20px',
  },
}));

export const IconButtonFour = styled(IconButton)({
  color: 'inherit',
  size: 'large',
  ariaLabel: 'show 4 new mails',
});

export const BoxNewOne = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.only('xs')]: {
    display: 'none',
  },
}));

export const IconButtonFive = styled(IconButtonFour)({
  ariaLabel: 'show 17 new notifications',
});

export const IconButtonSix = styled(IconButtonFour)({
  ariaLabel: 'account of current user',
  edge: 'end',
  ariaControls: 'primary-search-account-menu',
  ariaHaspopup: 'true',
});

export const BoxNewTwo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: 'flex',
  },
  [theme.breakpoints.only('md')]: {
    display: 'none',
  },
}));

export const IconButtonSeven = styled(IconButtonFour)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    ariaLabel: 'show more',
    edge: 'end',
    ariaControls: 'primary-search-account-menu',
    ariaHaspopup: 'true',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
