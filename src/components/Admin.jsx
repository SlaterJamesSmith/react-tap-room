import React from 'react';
import KegList from './KegList';
import AddKeg from './KegList';
import PropTypes from "prop-types";



class Admin extends React.Component {
  render(){
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
      <button onClick={AddKeg}>
        Add Keg
      </button>
    </div>
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default Admin;
