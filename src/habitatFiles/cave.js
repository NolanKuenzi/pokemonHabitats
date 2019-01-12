import React from 'react';
import Hoc from './structure';

function GetCaveData(props) {
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

const CaveData = Hoc(GetCaveData, 'Cave');

const Cave = () => (
  <div>
    <CaveData />
  </div>
);
export default Cave;
