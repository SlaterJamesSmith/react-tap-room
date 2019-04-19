import React from 'react';
import Locations from './Locations';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Error404 from './Error404';
import market from '../assets/images/market.jpeg';

class ContentContainer extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      postList: [
        {
          beer: 'Duff',
          brand: 'Duff Beer',
          percent: '100',
          cost: '5'
        },
        {
          beer: 'Duff Two',
          brand: 'Duff Beer',
          percent: '99',
          cost: '3'
        },
        {
          beer: 'Duffy the Vampire Slayer',
          brand: 'Duff Beer',
          percent: '101',
          cost: '6'
        }
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  
  handleAddingNewKegToList(newKeg){
    var newPostList = this.state.postList.slice();
    newPostList.push(newTicket);
    this.setState({postList: newPostList});
  }
  
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
          <Route path='/admin' render={()=><Admin onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
