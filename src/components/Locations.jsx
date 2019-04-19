import React from 'react';
import AvailableProduce from './AvailableProduce';
import KegList from './KegList';

function Locations(){
  return (
    <div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: 1em;
          grid-template-columns: 200px auto;
        }
       `}</style>
      <KegList/>
      <AvailableProduce/>
    </div>
  );
}

export default Locations;
