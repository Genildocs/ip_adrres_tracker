// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import Informations from './components/Informations';
import LeafletMap from './components/LeafletMap';
import axios from 'axios';
import Loader from './components/Loader';
import ResError from './components/ResError';
const API_KEY = import.meta.env.VITE_APP_IP_GEOLOCATION_API_KEY;
function App() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState('');
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      try {
        setError('');
        setIsLoading(true);
        const res = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`
        );

        if (!res.ok) throw new Error('Nenhum ip encontrato');
        const data = await res.json();
        setData(data);
        setCoords({ lat: data.latitude, lon: data.longitude });
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
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
        {isLoading && <Loader />}
        {!isLoading && !error && <Informations data={data} />}
        {error && <ResError message={error} />}
      </div>
      <LeafletMap coords={coords} />
    </div>
  );
}

export default App;
