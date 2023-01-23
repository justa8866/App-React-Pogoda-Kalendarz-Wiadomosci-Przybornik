import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

export const CustomBox = styled(Box)({
  marginTop: '8',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CustomButton = styled(Button)({
  marginTop: '25px',
  marginBottom: '15px',
});

export const Wrapper = styled(Button)({
  marginTop: '20px',
  height: '45px',
  width: '20px',
  backgroundColor: '#ab47bc',
});

export const SubmitButton = styled(Button)({
  marginTop: '35px',
  marginBottom: '15px',
  backgroundColor: '#ab47bc',
});

export const SubmitLink = styled(Link)({
  textDecoration: 'none',
});

export const MainLockIcon = styled(LockOutlinedIcon)({
  height: '40px',
  width: 'auto',
  color: '#fff',
});
