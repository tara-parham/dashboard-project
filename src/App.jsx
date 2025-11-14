import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import TotalSummary from "./components/TotalSummary";
import { products } from "./data/products";

function App() {
  //state
  const [productsWithCount, setProductsWithCount] = useState(
    products.map((item) => ({ ...item, count: 0 }))
  );
  //function
  function handleCountChange(id, newCount) {
    setProductsWithCount(
      productsWithCount.map((item) =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  }
  //return
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🛍️ Product Dashboard</h1>
      <ProductList
        products={productsWithCount}
        onCountChange={handleCountChange}
      />
      <TotalSummary products={productsWithCount} />
    </section>
  );
}
export default App;
