import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: 'flex',
  },
  [theme.breakpoints.only('md')]: {
    display: 'none',
  },
}));

export const IconButtonElement = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    edge: 'end',
    ariaHaspopup: 'true',
    color: 'inherit',
    size: 'large',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
