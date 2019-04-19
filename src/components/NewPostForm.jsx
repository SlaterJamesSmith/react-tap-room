import React from 'react';

function NewPostForm(){
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
      <h3>phone: 1-800-FARMERS-MARKET | email: farmersmarket@loremipsum.com</h3>
      <h4>The Farmer's Farm Farm</h4>
      <h4>1234 Farmers Mkt Ave.</h4>
      <h4>97992 Portland, OR</h4>
    </div>
  );
}

export default NewPostForm;
