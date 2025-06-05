import React from 'react';

const PerfumeCard = ({ name, image, cloneImage }) => {
  return (
    <div className="relative group w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
      {/* Scentari Image */}
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:-translate-y-full"
      />

      {/* Clone Image */}
      {cloneImage && (
        <img
          src={cloneImage}
          alt={`Clone of ${name}`}
          className="absolute top-full left-0 w-full h-full object-cover transition-all duration-500 group-hover:top-0"
        />
      )}

      {/* Perfume Name */}
      <div className="absolute bottom-0 bg-white bg-opacity-80 text-center w-full py-2 font-semibold text-sm">
        {name}
      </div>
    </div>
  );
};

export default PerfumeCard;
