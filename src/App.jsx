// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getAll } from "./api/service";
import InputSearch from "./components/InputSearch";
import Informations from "./components/Informations";
import LeafletMap from "./components/LeafletMap";

function App() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState("");
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    getAll(ip).then((res) => {
      setCoords({ lat: res.latitude, lon: res.longitude });
      setData(res);
    });
  }, [ip]);

  return (
    <div>
      <div className="bg-[url('./assets/pattern-bg-mobile.png')] md:bg-[url('./assets/pattern-bg-desktop.png')] bg-no-repeat bg-cover h-[22rem]">
        <h1 className="text-center text-2xl text-white font-semibold py-7">
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
