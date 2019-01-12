import React from 'react';
import Hoc from './structure';

function GetRareData(props) {
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

const RareData = Hoc(GetRareData, 'Rare');

const Rare = () => (
  <div>
    <RareData />
  </div>
);
export default Rare;
