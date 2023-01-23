import { createTheme } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[400],
      contrastText: '#fff',
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;
