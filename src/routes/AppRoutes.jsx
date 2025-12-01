import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import { lazy, Suspense } from "react";
import AddProduct from "../components/AddProduct";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/add" element={<AddProduct />} />
    </Routes>
  );
}
