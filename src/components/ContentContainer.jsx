import React from 'react';
import Locations from './Locations';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Error404 from './Error404';
import market from '../assets/images/market.jpeg';

class ContentContainer extends React.Component{
  render(){
    return (
      <div>
        <style jsx>{`
          div {
            width: 1440px;
            margin-left: auto;
            margin-right: auto;
          }
          img {
            width: 150vw;
            position: absolute;
            z-index: -1;
            margin-left: -25vw;
            margin-right: 0;
            margin-top: -1000px;
            opacity: 0.5;
          }

          @media only screen and (max-width: 1500px)  {
            div {
              width: 95vw;
            }
            img {
              margin-top: -20vw;
            }
          }
          @media only screen and (max-width: 1000px)  {
            img {
              opacity: 0;
            }
          }
         `}</style>
        <img src={market}/>
        <Switch>
          <Route exact path='/' component={Locations} />
          <Route path='/admin' component={Admin} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
