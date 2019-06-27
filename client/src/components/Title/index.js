import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  height: 6vmax;
`;

const AbsTitle = styled.div`
  text-align: center;
  font-size: 3vmax;
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