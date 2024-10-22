import React from 'react';

export default function ResError({ message }) {
  return (
    <div className="px-4 mt-5 relative lg:flex lg:justify-center lg:items-center ">
      <div className="lg:w-[80%] bg-white rounded-lg p-5 flex flex-col md:flex-row items-center gap-7 mt-[4rem] lg:justify-center">
        {message}
      </div>
    </div>
  );
}
