import React from 'react';
import styled from 'styled-components';
import { Title } from '..';
import { UpcomingEvent } from '..';

const UpcomingEventsWrapper = styled.div`
  width: 100%;
`;

const UpcomingEvents = (props) => (
  
    <UpcomingEventsWrapper id="UpcomingEvents">
      <Title title='upcoming events' />
      <UpcomingEvent
        name='Kalisa'
        type='Delivery'
        date='7/1/2019'
        status='Confirmed'
      />
      <UpcomingEvent
        name='Claude'
        type='Repair'
        date='8/01/2019'
        status='Pending'
      />   
    </UpcomingEventsWrapper>
  
);

export default UpcomingEvents;