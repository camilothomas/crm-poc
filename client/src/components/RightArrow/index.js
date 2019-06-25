import React from 'react';
import styled from 'styled-components';
import rightArrow from '../../baseline-chevron_right-24px.svg';

const Arrow = styled.img`
  height: 6vmin;
  position:absolute;
  top: 50%;
  margin-top: -3vmin;
  right: 4%;
`;

const RightArrow = (props) => (
  
  <Arrow src={ rightArrow } />
  
);

export default RightArrow;