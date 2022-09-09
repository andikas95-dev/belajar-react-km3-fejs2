import React, { useEffect, useState } from 'react';

//Stateless Component
function PerkenalanDiri(props) {
  const { namaku, changeNama, perkenalan } = props;
  // const [namaku, setNamaku] = useState('Lim Felicia');

  return (
    <>
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
