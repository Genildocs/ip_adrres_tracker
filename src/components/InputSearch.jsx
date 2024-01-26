import React, { useState, useEffect } from 'react';
import { SlArrowRight } from 'react-icons/sl';

export default function InputSearch({ setIp }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setIp(search);
    setSearch('');
  };

  return (
    <div className="flex items-center px-5">
      <input
        type="text"
        value={search}
        placeholder="Search for any IP address or domain"
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none border-[1px] border-gray-300 h-  p-[0.5rem] w-[100%] rounded-l-md"
      />
      <div className=" bg-very_dark_gray py-[0.6rem] px-4 rounded-br-md rounded-tr-md">
        <button onClick={handleSearch}>
          <SlArrowRight className="text-white " />
        </button>
      </div>
    </div>
  );
}
