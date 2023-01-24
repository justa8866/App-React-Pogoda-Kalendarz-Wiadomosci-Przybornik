import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { LinearProgress, ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';
import theme from './components/Theme/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LinearProgress />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
