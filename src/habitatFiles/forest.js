import React from 'react';
import Hoc from './structure';

function GetForestData(props) {
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

const ForestData = Hoc(GetForestData, 'Forest');

const Forest = () => (
  <div>
    <ForestData />
  </div>
);
export default Forest;
