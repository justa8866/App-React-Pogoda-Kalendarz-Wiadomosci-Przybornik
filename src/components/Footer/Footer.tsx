import * as React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LinkNew, BoxNew } from './Footer.style';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <LinkNew>Your Website</LinkNew>
      {' '}
      {new Date().getFullYear()}
      .
      {' '}

    </Typography>
  );
}

export default function Footer() {
  return (
    <BoxNew>
      <Container maxWidth="sm">
        <Typography variant="body1">My footer can be found here.</Typography>
        <Copyright />
      </Container>
    </BoxNew>
  );
}
