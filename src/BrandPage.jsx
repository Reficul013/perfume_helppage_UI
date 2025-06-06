import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PerfumeCard from "./PerfumeCard";

const BrandPage = () => {
  const { brandName } = useParams();
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/perfumes/`)
      .then((res) => {
        const filtered = res.data.filter(
          (p) => p.brand.toLowerCase() === brandName.toLowerCase()
        );
        setPerfumes(filtered);
      })
      .catch((err) => {
        console.error("Failed to fetch perfumes:", err);
      });
  }, [brandName]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Brand Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center capitalize text-gray-800 mb-8">
        {brandName} Perfumes
      </h1>

      {/* Perfume Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {perfumes.map((p, i) => (
          <PerfumeCard
            key={i}
            name={p.name}
            image={p.image_url}
            cloneImage={p.clone_image_url}
          />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 text-sm text-center text-gray-600 max-w-2xl mx-auto">
        <p>
          <strong>Disclaimer:</strong> The perfumes listed here are not exact replicas of the originals. They are crafted to evoke a similar essence or inspiration and are only inspired by the original fragrances.
        </p>
      </div>
    </div>
  );
};

export default BrandPage;
