import React from 'react';
import styled from 'styled-components';
import { RightArrow } from '../';

const ListItem = styled.div`
  height: 16vmax;
`;

const EventCard = styled.div`
  background-color: #EDEFF2;
  box-shadow: 0 .5vh .25vh rgba(0,0,0,.2);
  border-radius: 2vmin;
  height: 13.5vmax;
  width: 80vw;
  left:50%;
  margin-left:-40vw;
  position: absolute;
  font-size: 4.5vmin;
`;

const EventDataGrid = styled.div`
  height: 100%;
  margin-top: 1vmax;
`;

const Gutter = styled.div`
  display: inline-block;
  width: 12.5%;
`;

const Quad = styled.div`
  display: inline-block;
  width: 37.5%;
  text-align: center;
  height: 50%;
`;

const ArrowWrap = styled.div`
  height: 12vh;
  width: 80vw;
  position:absolute;
  left:50%;
  margin-left:-40vw;
`;

function UpcomingEvent(props) {
  return(
      <React.Fragment>
        <div className='row'>
          <div className='col'>
            <ListItem>
            <EventCard>
              <EventDataGrid>
              <Gutter/>
              <Quad>
                {props.name}
              </Quad>
              <Quad>
                {props.type}
              </Quad>
              <Gutter/>
              <Gutter/>
              <Quad>
                {props.date}
              </Quad>
              <Quad>
                {props.status}
              </Quad>
              </EventDataGrid>
            </EventCard>
            <ArrowWrap>
            <RightArrow />
            </ArrowWrap>
            </ListItem>
            
          </div>
        </div>
      </React.Fragment>
  );
}

export default UpcomingEvent;