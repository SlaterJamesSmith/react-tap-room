import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return(
    <div>
      <style jsx>{`
         div {
           background-color: lightgreen;
           font-family: arial;
           color: forestgreen;
         }
         ul {
           display: grid;
           grid-template-columns: auto auto auto;
           padding-bottom: 15px;
         }
         h1 {
           padding-top: 15px;
           text-align: center;
           margin: 0;
           margin-bottom: 15px;
         }
         h4 {
           text-align: center;
           margin: 0;
         }
         ul {
           margin-bottom: 0;
           padding-bottom: 1em;
         }
         li {
           display: block;
         }

       `}</style>
      <h1>{props.month}</h1>
      <h4>In season:</h4>
      <ul>
        {props.selections.map((item, index) =>
          <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}


Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selections: [PropTypes.string.isRequired]
};

export default Produce;
