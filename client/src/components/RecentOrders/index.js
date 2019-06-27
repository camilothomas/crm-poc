import React from 'react';
import styled from 'styled-components';
import { Title } from '../';
import { RecentOrder } from '../';

const RecentOrdersWrapper = styled.div`
  width: 100%;
`;

const RecentOrders = (props) => (
  
  <RecentOrdersWrapper id="RecentOrders">
    <Title title='recent orders' />
    <RecentOrder orderData='Gaspard' orderQty='80,000' />
    <RecentOrder orderData='Claire' orderQty='90,000' />        
    <RecentOrder orderData='Kalisa' orderQty='50,000' />
    <RecentOrder orderData='Emmanuel' orderQty='150,000' />
  </RecentOrdersWrapper>
  
);

export default RecentOrders;