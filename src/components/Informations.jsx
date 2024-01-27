import React from "react";

export default function Informations({ data }) {
  return (
    <div className="px-4 mt-5 relative ">
      {data.length !== 0 ? (
        <div
          key={data.ip}
          className="bg-white rounded-lg p-5 flex flex-col md:flex-row items-center gap-7 mt-[4rem]"
        >
          <div>
            <h2 className="text-center">IP Address</h2>
            <p>{data.ip}</p>
          </div>
          <div>
            <h3 className="text-center">Location</h3>
            <p>
              {data.city}, {data.state_prov}
            </p>
          </div>
          <div>
            <h4 className="text-center">Timezone</h4>
            <p>{data.time_zone.name}</p>
          </div>
          <div>
            <h5 className="text-center">ISP</h5>
            <p>{data.isp}</p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
