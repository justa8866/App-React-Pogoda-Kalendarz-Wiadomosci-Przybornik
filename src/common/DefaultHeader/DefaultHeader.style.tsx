import { Box, AppBar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({});

export const Wrapper = styled(AppBar)({
  position: 'static',
  background: 'rgba(8, 23, 96, 0.8)',
  display: 'inline-block',
  width: '100vw',
});

export const AppName = styled(Typography)({
  fontSize: '30px',
  justifyContent: 'center',
  width: '80vw',
  paddingLeft: '20vw',
  textAlign: 'center',
  display: 'div',
  float: 'left',
});

export const LanguageWrapper = styled(Box)({
  width: '20vw',
  display: 'div',
  float: 'right',
});
