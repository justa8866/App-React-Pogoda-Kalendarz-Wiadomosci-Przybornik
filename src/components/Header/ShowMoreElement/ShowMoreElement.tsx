import React from 'react';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Wrapper, IconButtonElement } from './ShowMoreElement.style';

interface IShowMoreElement {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  label: string;
  ariaControls: string;
}
const ShowMoreElement = ({
  label,
  ariaControls,
  onClick,
}: IShowMoreElement) => (
  <Wrapper>
    <IconButtonElement
      onClick={onClick}
      aria-label={label}
      aria-controls={ariaControls}
    >
      <MoreIcon />
    </IconButtonElement>
  </Wrapper>
);

export default ShowMoreElement;
