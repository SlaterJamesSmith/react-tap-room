import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

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
      currentlyVisibleContent = <NewKegForm/>;
    }
    return (
      <div>
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
