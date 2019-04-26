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
    this.handleShowingForm = this.handleShowingForm.bind(this);
  }

  handleShowingForm(){
    this.setState({formVisibleOnPage: true});
  }

  // handleHidingForm(){
  //   this.setState({formVisibleOnPage: false});
  // }

  render(){
    let currentlyVisibleContent = false;
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
        {currentlyVisibleContent}
        <button onClick={this.handleShowingForm}>
          Add New Keg
        </button>
      </div>
    );
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegControl;
