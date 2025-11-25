import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import { lazy, Suspense } from "react";

export default function AppRoutes() {
  const ProductDetail = lazy(() => import("../components/ProductDetail"));
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<p>Loading, please wait!</p>}>
            <ProductDetail />
          </Suspense>
        }
      />
    </Routes>
  );
}
