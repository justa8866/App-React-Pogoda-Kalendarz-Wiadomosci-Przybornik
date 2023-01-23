import React from 'react';
import AuthSwitch from './AuthSwitchElement.style';

interface IAuthSwitchElement {
  inputProps: {
    ariaLabel: string;
  };
  onChange:
  | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
  | undefined;
}
const AuthSwitchElement = ({ inputProps, onChange }: IAuthSwitchElement) => (
  <AuthSwitch
    defaultChecked
    onChange={onChange}
    input-props={{
      ariaLabel: { inputProps },
    }}
  />
);

export default AuthSwitchElement;
