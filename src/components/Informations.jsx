import React from 'react';

export default function Informations({ data }) {
  return (
    <div className="px-5 mt-5">
      {data.length !== 0 ? (
        <div
          key={data.ip}
          className="bg-white rounded-lg p-5 flex flex-col items-center gap-7"
        >
          <div>
            <h2>IP Address</h2>
            <p>{data.ip}</p>
          </div>
          <div>
            <h3 className="text-center">Location</h3>
            <p>
              {data.location.city}, {data.location.region}
            </p>
          </div>
          <div>
            <h4>Timezone</h4>
            <p>{'UTC' + data.location.timezone}</p>
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
