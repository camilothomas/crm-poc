import React from 'react';
import styled from 'styled-components';
import { RightArrow } from '../';

const ListItem = styled.div`
  height: 9.5vmax;
`;

const OrderCard = styled.div`
  background-color: #EDEFF2;
  box-shadow: 0 .5vh .25vh rgba(0,0,0,.2);
  border-radius: 2vmin;
  height: 7vmax;
  display: table;
  width: 80vw;
  position:absolute;
  right:50%;
  margin-right:-40vw;
  font-size: 5vmin;
`;

const OrderText = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const ArrowWrap = styled.div`
  height: 7vmax;
  width: 80vw;
  position:absolute;
  left:50%;
  margin-left:-40vw;
`;

const RecentOrder = (props) =>(  
    
    <ListItem>
      <OrderCard>
        <OrderText>
          {props.orderData + ' - ' + props.orderQty}
        </OrderText>
      </OrderCard>
      <ArrowWrap>
      <RightArrow />
      </ArrowWrap>
    </ListItem>
  
);

export default RecentOrder;