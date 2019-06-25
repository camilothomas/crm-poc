import React from 'react';
import styled from 'styled-components';
import menuIcon from '../../baseline-menu-24px.svg';

const MenuImg = styled.img`
  width: 6.5vmax;
  position: absolute;
  top: 50%;
  margin-top: -3.5vmax;
  left: 10%;
  margin-left: -3vmax;
`;

const MenuIcon = (props) => (
  
  <MenuImg src={menuIcon} />
  
);

export default MenuIcon;