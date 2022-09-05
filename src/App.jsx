import { useState } from 'react';
import './App.css';
import PerkenalanDiri from './pages/PerkenalanDiri';
import PerkenalanDiriClass from './pages/PerkenalanDiriClass';

function App() {
  const [nama, setNama] = useState('Indah');

  return (
    <div className="App">
      <PerkenalanDiri
        namaku={nama}
        perkenalan
        changeNama={(val) => setNama(val)}
      />
      <PerkenalanDiri perkenalan changeNama={(val) => setNama(val)} />
      <PerkenalanDiri changeNama={(val) => setNama(val)} />
      <PerkenalanDiriClass />
      <PerkenalanDiriClass />
      <PerkenalanDiriClass />
    </div>
  );
}

export default App;
