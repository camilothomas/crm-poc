import React from 'react';
import styled from 'styled-components';
import { Search } from '../'
import { MenuIcon } from '../'

const HeaderContainer = styled.div`
  height: 14vmax;
`;

const Header = (props) => (
    
    <div className='row'>
      <div className='col'>
      <HeaderContainer>
        
        <MenuIcon />
      
      
        <Search />
      </HeaderContainer>
      </div>
    </div>
);

export default Header;