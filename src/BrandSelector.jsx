import { Link } from "react-router-dom";

const brands = ["Scentari", "Zara"]; // You can make this dynamic later

const BrandSelector = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Choose a Perfume Brand</h1>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 justify-center">
        {brands.map((brand) => (
          <Link
            key={brand}
            to={`/brand/${brand.toLowerCase()}`}
            className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          >
            {brand}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandSelector;
