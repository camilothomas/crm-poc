import React from 'react';
import styled from 'styled-components';
import { Title } from '..';
import { UpcomingEvent } from '..';

const UpcomingEvents = (props) => (
  <React.Fragment>
    <div className="row">
      <div className="col">
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
      </div>
    </div>
  </React.Fragment>
);

export default UpcomingEvents;