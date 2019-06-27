import React from 'react';
import { UpcomingEvents } from '../../components'
import { RecentOrders } from '../../components'
import { Header } from '../../components'
import { Sidebar } from '../../components'
import styled from 'styled-components';

const HeightControl95 = styled.div`
  height: 99vmax;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMenu: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.hasMenu ? this.setState({hasMenu: false}) : this.setState({hasMenu: true});
    console.log(this.state.hasMenu);
  }
  
  /* height of divs {header: [15vmax,100.05],
    recentorders: {total: [42vmax, 280.11], title: [4vmax,26.67] recentorder: [9.5vmax, 63.36]},
    upcomingevents: {total: [36vmax ,240.11], title: [4vmax,26.67] recentorder: [16vmax, 106.72]}}
    Totals: [93, [620.31]]*/
  
  render() {
    return(
      <HeightControl95>
        <Header onClick={this.handleClick} />
        <RecentOrders />
        <UpcomingEvents />
        <Sidebar hide={this.state.hasMenu} />
      </HeightControl95>
    );
  }
}

export default Home;