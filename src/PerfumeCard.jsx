import React, { useState, useEffect } from 'react';

const PerfumeCard = ({ name, image, cloneImage, cloneOf }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggled, setToggled] = useState(false);

  // Detect mobile device on initial render
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setToggled(prev => !prev);
    }
  };

  // Determine which name to show
  const getDisplayedName = () => {
    if (isMobile) {
      return toggled && cloneOf ? cloneOf : name;
    }
    return cloneOf ? (
      <span className="group-hover:hidden">{name}</span>
    ) : name;
  };

  return (
    <div
      className="relative group w-full h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {/* Scentari Image */}
      <img
        src={image}
        alt={name}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500
          ${isMobile ? (toggled ? '-translate-y-full' : 'translate-y-0') : 'group-hover:-translate-y-full'}
        `}
      />

      {/* Clone Image */}
      {cloneImage && (
        <img
          src={cloneImage}
          alt={`Clone of ${name}`}
          className={`absolute left-0 w-full h-full object-cover transition-all duration-500
            ${isMobile ? (toggled ? 'top-0' : 'top-full') : 'top-full group-hover:top-0'}
          `}
        />
      )}

      {/* Perfume Name (Changes on toggle/hover) */}
      <div className="absolute bottom-0 bg-white bg-opacity-80 text-center w-full py-2 font-semibold text-sm z-10">
        {isMobile
          ? toggled && cloneOf
            ? cloneOf
            : name
          : cloneOf
          ? (
            <>
              <span className="group-hover:hidden">{name}</span>
              <span className="hidden group-hover:inline">{cloneOf}</span>
            </>
          )
          : name}
      </div>
    </div>
  );
};

export default PerfumeCard;
