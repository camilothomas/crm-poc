import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from '../';

/*height of menu based on height of all homepage components: header: 14vmax; title: 6.5 vmax (*2); orders: 9.5vmax (*4); events: 16vmax (*2); = 97vmax
*/

const Container = styled.div`
  height: 93.5vmax;
  position:absolute;
  background-color: #C1EAF2;
  top:3.5vmax;
  width:51%;
  margin-bottom: 1vmax;
  z-index: 1000;
  box-shadow: 0 .5vh .25vh rgba(0,0,0,.2);
`;

const LocateMenuBtn = styled.div`
  width: 100%;
  height: 14vmax;
  z-index: 2000;
  position:absolute;
  left: 0;
`;

const Sidebar = (props) => (
  <div className='row'>
    <div className='col'>
      <LocateMenuBtn>
        <MenuIcon />
      </LocateMenuBtn>
      <Container className="">
      </Container>
    </div>   
  </div>  
  
);

export default Sidebar;