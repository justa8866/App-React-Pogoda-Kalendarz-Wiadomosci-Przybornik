/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const Input = (props: TextFieldProps) => (
  <TextField
    margin="normal"
    required
    fullWidth
    autoFocus
    {...props}
  />
);

export default Input;
