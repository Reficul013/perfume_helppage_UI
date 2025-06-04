import { Routes, Route } from "react-router-dom";
import BrandSelector from "./BrandSelector";
import BrandPage from "./BrandPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BrandSelector />} />
      <Route path="/brand/:brandName" element={<BrandPage />} />
    </Routes>
  );
}

export default App;
