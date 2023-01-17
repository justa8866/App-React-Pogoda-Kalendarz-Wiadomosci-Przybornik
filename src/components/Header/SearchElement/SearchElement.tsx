import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './SearchElement.style';

interface ISearchElement {
  placeholder: string;
  inputProps: {
    ariaLabel: string ;
  };
}
const SearchElement = ({ placeholder, inputProps }: ISearchElement) => (
  <Search
    placeholder={placeholder}
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
