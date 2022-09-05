import React, { useState } from 'react';

//Stateless Component
function PerkenalanDiri(props) {
  const { namaku = 'data kosong', changeNama, perkenalan } = props;
  // const [namaku, setNamaku] = useState('Lim Felicia');
  const data = {
    angka: 1,
  };

  const { angka: indah } = data;

  return (
    <>
      {indah}
      {perkenalan && <div>Nama Saya {namaku}</div>}
      <br />
      <input
        value={namaku}
        onChange={(e) => {
          // console.log(e);
          changeNama(e.target.value);
        }}
      />
    </>
  );
}

export default PerkenalanDiri;
