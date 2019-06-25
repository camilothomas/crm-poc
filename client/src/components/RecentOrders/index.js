import React from 'react';
import styled from 'styled-components';
import { Title } from '../';
import { RecentOrder } from '../';

const RecentOrders = (props) => (
  <React.Fragment>
    <div className="row">
      <div className="col">
        <Title title='recent orders' />
        <RecentOrder orderData='Gaspard' orderQty='80,000' />
        <RecentOrder orderData='Claire' orderQty='90,000' />        
        <RecentOrder orderData='Kalisa' orderQty='50,000' />
        <RecentOrder orderData='Emmanuel' orderQty='150,000' />
      </div>
    </div>
  </React.Fragment>
);

export default RecentOrders;