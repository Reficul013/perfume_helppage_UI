import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PerfumeCard from "./PerfumeCard";

const BrandPage = () => {
  const { brandName } = useParams();
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/perfumes/")
      .then(res => {
        const filtered = res.data.filter(p => p.brand.toLowerCase() === brandName.toLowerCase());
        setPerfumes(filtered);
      })
      .catch(err => console.error("API fetch failed:", err));
  }, [brandName]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center capitalize">{brandName} Perfumes</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {perfumes.map((p, i) => (
          <PerfumeCard
            key={i}
            name={p.name}
            image={p.image_url}
            cloneImage="https://via.placeholder.com/400x600?text=Clone+Image"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
