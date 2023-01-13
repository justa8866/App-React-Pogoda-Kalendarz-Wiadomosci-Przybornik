import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const BoxNew = styled(Box)({
  backgroundColor: 'rgb(211,211,211)',
  '&:hover': {
    backgroundColor: 'rgb(192,192,192)',
  },
  flexGrow: '1',
  maxHeight: '100vh',
  gridTemplateRows: '1fr',
  py: 3,
  px: 2,
  mt: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  right: '0',
});

export const LinkNew = styled(Link)({
  color: 'inherit',
  href: 'https://github.com/justa8866/App-React-Pogoda-Kalendarz-Wiadomosci-Przybornik',
});
