import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { LinearProgress } from '@mui/material';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<LinearProgress />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
