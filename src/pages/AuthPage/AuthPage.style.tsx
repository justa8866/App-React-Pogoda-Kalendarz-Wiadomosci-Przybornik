import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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

export const MainLockIcon = styled(LockOutlinedIcon)({
  height: '40px',
  width: 'auto',
  color: '#fff',
});
