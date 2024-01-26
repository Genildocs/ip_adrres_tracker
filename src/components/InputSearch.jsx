import React, { useState, useEffect } from 'react';

export default function InputSearch() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
}
