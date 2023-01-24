import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const SubmitButton = styled(Button)({
  marginTop: '35px',
  marginBottom: '15px',
  backgroundColor: '#ab47bc',
});

export const SubmitLink = styled(Link)({
  textDecoration: 'none',
});
