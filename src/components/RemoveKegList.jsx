import React from 'react';
import RemoveKeg from './RemoveKeg';
import PropTypes from 'prop-types';




function RemoveKegList(props){
  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
         }
         h2 {
           background-color: darkblue;
           padding: 10px;
           color: skyblue;
           border: 3px solid skyblue;
           text-align: center;
         }
         ul {
           padding: 8px;
         }
         li {
           display: block;
           padding: 0;
           margin-bottom: 0;
         }
       `}</style>
      <h2>DRINKS ON TAP</h2>
      {props.kegList.map((keg) =>
        <RemoveKeg onRemoveKeg={this.props.onRemoveKeg}
          beer={keg.beer}
          brand={keg.brand}
          percent={keg.percent}
          cost={keg.cost}
          id={keg.id} />
      )}

    </div>
  );
}


export default RemoveKegList;
