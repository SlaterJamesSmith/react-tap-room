import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <style jsx>{`
         div {
           background-color: lightgreen;
           font-family: arial;
           background-color: skyblue;
           color: darkblue;
         }
         ul {
           padding: 8px;
           border: 3px solid darkblue;
         }
         li {
           display: block;
         }
       `}</style>
      <ul>
        <li><h3>{props.beer}</h3></li>
        <li><h4>{props.brand}</h4></li>
        <li><p>{props.percent}%</p></li>
        <li><p>${props.cost}</p></li>
      </ul>
    </div>
  );
}

Post.propTypes = {
  beer: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};

export default Post;
