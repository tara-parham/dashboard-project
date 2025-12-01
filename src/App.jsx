import { Link } from "react-router-dom";
import "./App.css";
import TotalSummary from "./components/TotalSummary";
import ProductProvider from "./context/ProductContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ProductProvider>
      <section className="p-6 bg-gray-50 min-h-screen space-y-6">
        <Link to="/">
          <h1 className="text-2xl font-bold">🛍️ Product Dashboard</h1>
        </Link>
        <AppRoutes />
        <TotalSummary />
        <Link to="/add">Add Product</Link>
      </section>
    </ProductProvider>
  );
}
export default App;
