import React from 'react';
import KegList from './KegList';
import AddKeg from './KegList';



function Admin(){
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
      <button onClick={AddKeg}>
        Add Keg
      </button>
    </div>
  );
}

export default Admin;
