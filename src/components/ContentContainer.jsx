import React from 'react';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import KegControl from './KegControl';
import Error404 from './Error404';
import market from '../assets/images/market.jpeg';

class ContentContainer extends React.Component{

  constructor(props) {
  super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          beer: 'The Duff Original IPA',
          brand: 'Duff Beer',
          percent: '100',
          cost: '5',
          id: 'mock1'
        },
        {
          beer: 'Duff Love',
          brand: 'Duff Beer',
          percent: '99',
          cost: '3',
          id: 'mock2'
        },
        {
          beer: 'Duffy the Vampire Slayer',
          brand: 'Duff Beer',
          percent: '101',
          cost: '6',
          id: 'mock3'
        },
        {
          beer: 'Duff and Duffer',
          brand: 'Duff Beer',
          percent: '101',
          cost: '6',
          id: 'mock4'
        }
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleRemoveKegFromList = this.handleRemoveKegFromList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

//NOT YET FUNCTIONAL
  handleRemoveKegFromList(removeKegId){

    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach((masterKeg, index) => {
      if (masterKeg.id === removeKegId) {
        console.log(masterKeg.id)
        console.log(index)
        newMasterKegList.splice(index, 1)
      }
  })
  this.setState({masterKegList: newMasterKegList});
  console.log(this.state)


    //
    // newMasterKegList.slice(removeKeg);
    // this.setState({masterKegList: newMasterKegList});
  }
//NOT YET FUNCTIONAL

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
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/admin' render={()=><KegControl onNewKegCreation={this.handleAddingNewKegToList} removeKegList={this.state.masterKegList} onRemoveKeg={this.handleRemoveKegFromList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
