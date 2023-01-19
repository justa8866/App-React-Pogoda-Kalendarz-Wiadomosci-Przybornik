import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './SearchElement.style';

interface ISearchElement {
  inputProps: {
    ariaLabel: string ;
  };
}
const SearchElement = ({ inputProps }: ISearchElement) => (
  <Search
    input-props={{
      ariaLabel: { inputProps },
    }}
  >
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase />
  </Search>
);

export default SearchElement;
