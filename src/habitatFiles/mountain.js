import React from 'react';
import Hoc from './structure';

function GetMountainData(props) {
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

const MountainData = Hoc(GetMountainData, 'Mountain');

const Mountain = () => (
  <div>
    <MountainData />
  </div>
);
export default Mountain;
