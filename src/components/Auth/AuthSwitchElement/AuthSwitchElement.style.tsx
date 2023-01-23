import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

const numbers = {
  authHeight: 16,
  switchThumb: 12,
};

const AuthSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: numbers.authHeight,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: numbers.switchThumb,
    height: numbers.switchThumb,
    borderRadius: numbers.authHeight / 2,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: numbers.authHeight / 2,
    opacity: 1,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default AuthSwitch;
