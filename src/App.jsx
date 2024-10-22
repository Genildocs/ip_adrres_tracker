// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import Informations from './components/Informations';
import LeafletMap from './components/LeafletMap';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_IP_GEOLOCATION_API_KEY;
function App() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState('');
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    const getAll = async () => {
      try {
        const URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`;
        const { data } = await axios.get(URL);
        setData(data);
        setCoords({ lat: data.latitude, lon: data.longitude });
      } catch (error) {
        console.error('Erro ao obter detalhes do IP: ', error);
      }
    };
    getAll();
  }, [ip]);

  return (
    <div>
      <div className="bg-[url('./assets/pattern-bg-mobile.png')] md:bg-[url('./assets/pattern-bg-desktop.png')] bg-no-repeat bg-cover h-[22rem]">
        <h1 className="text-center text-2xl text-white font-semibold py-7 ">
          IP Address Tracker
        </h1>
        <InputSearch setIp={setIp} />
        <Informations data={data} />
      </div>
      <LeafletMap coords={coords} />
    </div>
  );
}

export default App;
