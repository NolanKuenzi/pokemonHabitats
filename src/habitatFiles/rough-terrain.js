import React from 'react';
import Hoc from './structure';

function GetRoughTerrainData(props) {
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

const RoughTerrainData = Hoc(GetRoughTerrainData, 'Rough-Terrain');

const RoughTerrain = () => (
  <div>
    <RoughTerrainData />
  </div>
);
export default RoughTerrain;
