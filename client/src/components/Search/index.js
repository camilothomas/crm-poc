import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  box-shadow: 0 .5vh .25vh rgba(0,0,0,.2);
  border-radius: 2vmin;
  padding-left: 1vh;
  padding-right: 1vh;
  border: none;
  width: 100%;
  height: 6vmax;
  font-size: 4.5vmin;
`;

const Form1 = styled.form`
  width: 70%;
  position: absolute;
  top:50%;
  margin-top:-3.5vmax;
  right:50%;
  margin-right:-40vw;
`;

const Search = (props) => (
      <React.Fragment>
      <Form1 action="/action_page.php">
        <SearchInput type="text" name="search" placeholder="search"/>
      </Form1>
      </React.Fragment>
);

export default Search;
