import React from 'react';
import Hoc from './structure';

function GetUrbanData(props) {
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

const UrbanData = Hoc(GetUrbanData, 'Urban');

const Urban = () => (
  <div>
    <UrbanData />
  </div>
);
export default Urban;
