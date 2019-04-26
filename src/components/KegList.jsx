import React from 'react';
import Keg from './Keg';


var kegList = [
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

function KegList(){
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
      {kegList.map((keg, index) =>
        <Keg beer={keg.beer}
          brand={keg.brand}
          percent={keg.percent}
          cost={keg.cost}
          key={index} />
      )}

    </div>
  );
}

export default KegList;
