import React, { useEffect, useState } from 'react';
import { getAll } from './api/service';
import InputSearch from './components/InputSearch';
import Informations from './components/Informations';

function App() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState('');

  useEffect(() => {
    getAll(ip).then((res) => {
      setData(res);
    });
  }, [ip]);

  return (
    <div>
      <h1>IP Address Tracker</h1>
      <InputSearch />
      <Informations data={data} />
    </div>
  );
}

export default App;
