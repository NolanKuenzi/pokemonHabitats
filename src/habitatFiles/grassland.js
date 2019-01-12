import React from 'react';
import Hoc from './structure';

function GetGrasslandData(props) {
  const { ...data } = props;
  return (
    <div>
      {data.display === null ? (
        <p>Data failed to load, please try again.</p>
      ) : (
        <div>{data.display}</div>
      )}
    </div>
  );
}

const GrasslandData = Hoc(GetGrasslandData, 'Grassland');

const Grassland = () => (
  <div>
    <GrasslandData />
  </div>
);
export default Grassland;
