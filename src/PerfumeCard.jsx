import React from "react";

const PerfumeCard = ({ name, image, cloneImage }) => {
  return (
    <div className="w-64 relative group overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-96">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-full"
        />
        <img
          src={cloneImage}
          alt="Clone"
          className="absolute inset-0 w-full h-full object-cover translate-y-full transition-transform duration-500 group-hover:translate-y-0"
        />
      </div>
      <div className="bg-white text-center p-2 font-semibold">{name}</div>
    </div>
  );
};

export default PerfumeCard;