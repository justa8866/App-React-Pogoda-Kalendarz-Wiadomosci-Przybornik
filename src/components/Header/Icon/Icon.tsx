import React from 'react';
import { IconButton, Badge } from '@mui/material';

interface IIcon {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void ;
  label: string;
  edge?: false | 'start' | 'end' | undefined;
  ariaControls?: string | undefined;
  ariaHaspopup?: boolean | undefined;
  badgeNumber: number;
  icon: JSX.Element;
}

const Icon = ({
  onClick,
  label,
  edge,
  ariaControls,
  ariaHaspopup,
  badgeNumber,
  icon,
}: IIcon) => (
  <IconButton
    onClick={onClick}
    aria-label={label}
    edge={edge}
    aria-controls={ariaControls}
    aria-haspopup={ariaHaspopup}
  >
    <Badge badgeContent={badgeNumber} color="error">
      {icon}
    </Badge>
  </IconButton>
);

export default Icon;
