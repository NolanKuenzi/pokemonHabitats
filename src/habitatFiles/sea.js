import React from 'react';
import Hoc from './structure';

function GetSeaData(props) {
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

const SeaData = Hoc(GetSeaData, 'Sea');

const Sea = () => (
  <div>
    <SeaData />
  </div>
);
export default Sea;
