import { Menu, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MenuNav = styled(Menu)({
  zIndex: 30,
});

export const IconButtonNew = styled(IconButton)({
  color: 'inherit',
  size: 'large',
  ariaLabel: 'show 4 new mails',
});

export const IconButtonNewOne = styled(IconButtonNew)({
  ariaLabel: 'show 17 new mails',
});

export const IconButtonNewTwo = styled(IconButtonNew)({
  ariaLabel: 'account of current user',
  ariaHaspopup: 'true',
});
