import React from 'react';
import AvailableProduce from './AvailableProduce';
import LocationsNew from './LocationsNew';

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
      <LocationsNew/>
      <AvailableProduce/>
    </div>
  );
}

export default Locations;
