import React from 'react';
import { UpcomingEvents } from '../../components'
import { RecentOrders } from '../../components'
import { Header } from '../../components'
import { Sidebar } from '../../components'
import styled from 'styled-components';

const MainContainer = styled.div`
  position:relative;
`;



const Home = () => (
  <React.Fragment>
  
      <div className='container-fluid'>
        <Sidebar />
        <Header />
        <RecentOrders />
        <UpcomingEvents />
      </div>
  
  </React.Fragment>
);
export default Home;
