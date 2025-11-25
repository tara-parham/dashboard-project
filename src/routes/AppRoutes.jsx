import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}
