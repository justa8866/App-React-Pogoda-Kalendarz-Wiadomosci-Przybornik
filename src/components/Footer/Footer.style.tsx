import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)({
  backgroundColor: 'rgb(211,211,211)',
  '&:hover': {
    backgroundColor: 'rgb(192,192,192)',
  },
  width: '100%',
  maxHeight: '100vh',
  justifyContent: 'center',
  textAlign: 'center',
  gridTemplateRows: '1fr',
  position: 'fixed',
  bottom: '0',
});

export default Wrapper;
