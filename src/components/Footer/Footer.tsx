import React from 'react';
import { Typography, Container } from '@mui/material';
import BoxNew from './Footer.style';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    {new Date().getFullYear()}
  </Typography>
);

function Footer(): JSX.Element {
  return (
    <BoxNew>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </BoxNew>
  );
}

export default Footer;
