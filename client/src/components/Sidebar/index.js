import React from 'react';
import styled, { css } from 'styled-components';

/*height of menu based on height of all homepage components: header: 14vmax; title: 6.5 vmax (*2); orders: 9.5vmax (*4); events: 16vmax (*2); = 97vmax
*/

const Container = styled.div`
  height:94vmax;
  position: absolute;
  background-color: #C1EAF2;
  top:3vmax;
  width:51vw;
  z-index: 1000;
  box-shadow: 0 .5vh .25vh rgba(0,0,0,.2);
  left: 3vw;
  
  ${props =>
    !props.toShow &&
    css`
      display: none;
    `};
`;

const Sidebar = (props) => (
    <Container toShow={props.hide}>
    </Container>
);

export default Sidebar;