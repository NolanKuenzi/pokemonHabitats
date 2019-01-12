import React from 'react';
import Hoc from './structure';

function GetWatersEdgeData(props) {
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

const WatersEdgeData = Hoc(GetWatersEdgeData, 'Waters-Edge');

const WatersEdge = () => (
  <div>
    <WatersEdgeData />
  </div>
);
export default WatersEdge;
