import React from 'react';
import styled from 'styled-components';
import { Search } from '../'
import { MenuIcon } from '../'

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Header = (props) => (
  <HeaderWrapper id="Header">
    <MenuIcon onClick={props.onClick}/>
    <Search />
  </HeaderWrapper>
);

export default Header;