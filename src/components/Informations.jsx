import React from 'react';

export default function Informations({ data }) {
  return (
    <div>
      {data.length !== 0 ? (
        <div key={data.ip}>
          <h3>IP Address</h3>
          <p>{data.ip}</p>
          <h3>Location</h3>
          <p>
            {data.location.city}, {data.location.region}
          </p>
          <h3>Timezone</h3>
          <p>{'UTC' + data.location.timezone}</p>
          <h3>ISP</h3>
          <p>{data.isp}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
