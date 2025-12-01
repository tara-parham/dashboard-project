import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import { lazy, Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function AppRoutes() {
  const ProductDetail = lazy(() => import("../components/ProductDetail"));
  const AddProduct = lazy(() => import("../components/AddProduct"));
  return (
    <Suspense fallback={<p>Loading, please wait...</p>}>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary fallback={<p>Something went wrong 😢</p>}>
              <ProductList />
            </ErrorBoundary>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Suspense>
  );
}
