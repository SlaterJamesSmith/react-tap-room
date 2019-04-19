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
        <li><h3>{props.day}s</h3></li>
        <li><h4>{props.location}</h4></li>
        <li><p>{props.hours}</p></li>
        <li><p>Booth: {props.booth}</p></li>
      </ul>
    </div>
  );
}

Post.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Post;
