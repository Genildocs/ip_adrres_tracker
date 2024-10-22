import React from 'react';

export default function Informations({ data }) {
  return (
    <div className="px-4 mt-5 relative lg:flex lg:justify-center lg:items-center ">
      {data.length !== 0 ? (
        <div
          key={data.ip}
          className="lg:w-[80%] bg-white rounded-lg p-5 flex flex-col md:flex-row items-center gap-7 mt-[4rem] lg:justify-center">
          <div role="section" className="text-center">
            <h2 className=" uppercase text-slate-500">IP Address</h2>
            <p className=" font-bold opacity-70">{data.ip}</p>
          </div>
          <div>
            <h3 className="text-center uppercase text-slate-500">Location</h3>
            <p className=" font-bold opacity-70">
              {data.city}, {data.state_prov}
            </p>
          </div>
          <div>
            <h4 className="text-center uppercase text-slate-500">Timezone</h4>
            <p className=" font-bold opacity-70">{data.time_zone.name}</p>
          </div>
          <div className="text-center">
            <h5 className="text-slate-500">ISP</h5>
            <p className=" font-bold opacity-70">{data.isp}</p>
          </div>
        </div>
      ) : (
        <div className="lg:w-[80%] bg-white rounded-lg p-5 flex flex-col md:flex-row items-center gap-7 mt-[4rem] lg:justify-center">
          <div className="load"></div>
          <p>Carregando...</p>
        </div>
      )}
    </div>
  );
}
