import React from 'react';
import { Badge, MenuItem } from '@mui/material';
import { IconButtonElement } from './MenuElement.style';

interface IMenuElement {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  label: string;
  badgeNumber: number;
  icon: JSX.Element;
  text: string;
}

const MenuElement = ({
  onClick,
  label,
  text,
  badgeNumber,
  icon,
}: IMenuElement) => (
  <MenuItem onClick={onClick}>
    <IconButtonElement aria-label={label}>
      <Badge badgeContent={badgeNumber} color="error">
        {icon}
      </Badge>
    </IconButtonElement>
    <p>{text}</p>
  </MenuItem>
);

export default MenuElement;
