import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    }
    return (
      <div>
      <style jsx>{`
         div {
           display: flex;
           font-family: arial;
           flex-direction: column;
           align-items: center;
         }
         h3 {
           color: black;
           margin-top: 2em;
           margin-bottom: 1em;
         }
         h4 {
           color: skyblue;
           padding-bottom: 5px;
           margin: 0;
         }
         ul {
           padding: 8px;
         }
         li {
           display: block;
         }
       `}</style>
      <KegList/>
        {currentlyVisibleContent}
        <button onClick={this.handleTroubleshootingConfirmation}>
          Add New Keg
        </button>
      </div>
    );
  }
}

KegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegControl;
