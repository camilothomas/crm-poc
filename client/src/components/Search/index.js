import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  height: 15vmax;
`;

const SearchInput = styled.input`
  box-shadow: 0 .5vh .25vh rgba(0,0,0,.2);
  border-radius: 2vmin;
  padding-left: 2vw;
  padding-right: 2vw;
  border: none;
  width: 66vw;
  height: 6vmax;
  font-size: 4.5vmin;
  position: absolute;
  top: 3vmax;
  right:50%;
  margin-right:-40vw;
`;

const Search = (props) => (
  <SearchWrapper>
    <form action="/action_page.php">
      <SearchInput type="text" name="search" placeholder="search"/>
    </form>
  </SearchWrapper>
);

export default Search;
