import { Link } from "react-router-dom";

const brands = ["Scentari"];

const BrandSelector = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/fragrantix_static_hero.jpg')" }}

    >
      {/* Overlay to slightly darken and enhance contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Layer */}
      <div className="relative z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-serif text-yellow-400 mb-4 drop-shadow-lg">
          Fragrantix
        </h1>
        <p className="text-gray-200 text-lg mb-10 drop-shadow-sm">
          Discover the original inspirations behind your favorite perfumes.
        </p>

        {/* Brand Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <Link
              key={brand}
              to={`/brand/${brand.toLowerCase()}`}
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-black font-semibold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {brand}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSelector;
