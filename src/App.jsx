import "./App.css";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

function App() {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🛍️ Product Dashboard</h1>
      <ProductList products={products} />
    </section>
  );
}
export default App;
