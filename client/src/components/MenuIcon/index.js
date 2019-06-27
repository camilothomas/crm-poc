import React from 'react';
import styled from 'styled-components';
import menuIcon from '../../baseline-menu-24px.svg';

const MenuImg = styled.img`
  width: 6.5vmax;
  position: absolute;
  top: 2.75vmax;
  left: 10%;
  margin-left: -3vmax;
  z-index: 2000;
`;

const MenuIcon = (props) => (
  <MenuImg src={menuIcon} onClick={props.onClick}/>
);

export default MenuIcon;