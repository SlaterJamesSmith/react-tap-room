import React from 'react';
import Post from './Post';


var postList = [
  {
    beer: 'Duff',
    brand: 'Duff Beer',
    percent: '100',
    cost: '5'
  },
  {
    beer: 'Duff Two',
    brand: 'Duff Beer',
    percent: '99',
    cost: '3'
  },
  {
    beer: 'Duffy the Vampire Slayer',
    brand: 'Duff Beer',
    percent: '101',
    cost: '6'
  }
];

function AddKeg(){
  postList.push({
    beer: 'Test',
    brand: 'Test',
    percent: 'Test',
    cost: 'Test'
  });
}

function KegList(){
  AddKeg();
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
      {postList.map((post, index) =>
        <Post beer={post.beer}
          brand={post.brand}
          percent={post.percent}
          cost={post.cost}
          key={index} />
      )}

    </div>
  );
}

export default KegList;
