import {
  Toolbar,
  Box,
  AppBar,
  Typography,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ToolbarContainer = styled(Toolbar)({
  columnGap: '10px',
});

export const Container = styled(Box)({
  flexGrow: '1',
});

export const AdditionalSpaceBetweenElements = styled(Container)({
});

export const Wrapper = styled(AppBar)({
  position: 'static',
  background: 'rgba(8, 23, 96, 0.8)',
});

export const AppName = styled(Typography)(({ theme }) => ({
  variant: theme.typography.h6 && {
    whiteSpace: 'nowrap',
    component: 'div',
    marginRight: '20px',
  },
}));

export const IconButtonElement = styled(IconButton)({
  color: 'inherit',
  size: 'large',
});

export const IconsWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.only('xs')]: {
    display: 'none',
  },
}));
