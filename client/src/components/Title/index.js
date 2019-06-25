import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 4.5vmin;
  height: 6vmax;
  display:table;
  width: 100%;
`;

const AbsTitle = styled.div`
  display: table-cell;
  text-align: center;
`;

function Title(props) {
  return(
    <TitleWrapper>
      <AbsTitle>
        {props.title}
      </AbsTitle>
    </TitleWrapper>
  );
}

export default Title;