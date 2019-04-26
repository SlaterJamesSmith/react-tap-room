import React from 'react';
import PatronView from './PatronView';
import { Switch, Route } from 'react-router-dom';
import KegControl from './KegControl';
import Error404 from './Error404';
import market from '../assets/images/market.jpeg';

class ContentContainer extends React.Component{

  constructor(props) {
  super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
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
          <Route exact path='/' component={PatronView} />
          <Route path='/admin' component={KegControl} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
