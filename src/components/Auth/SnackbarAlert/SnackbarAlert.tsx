import React, { ReactNode } from 'react';
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarCloseReason,
} from '@mui/material';

interface ISnackbarAlert {
  onCloseSnackbar:
  | ((
    event: Event | React.SyntheticEvent<Element, Event>,
    reason: SnackbarCloseReason
  ) => void)
  | undefined;
  onCloseAlert:
  | ((event: React.SyntheticEvent<Element, Event>) => void)
  | undefined;
  open: boolean | undefined;
  children: ReactNode;
  severity: AlertColor | undefined;
}

const SnackbarAlert = ({
  children,
  onCloseSnackbar,
  onCloseAlert,
  open,
  severity,
}: ISnackbarAlert) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onCloseSnackbar}>
    <Alert onClose={onCloseAlert} severity={severity}>
      {children}
    </Alert>
  </Snackbar>
);

export default SnackbarAlert;
