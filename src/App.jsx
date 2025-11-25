import "./App.css";
import TotalSummary from "./components/TotalSummary";
import ProductProvider from "./context/ProductContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ProductProvider>
      <section className="p-6 bg-gray-50 min-h-screen space-y-6">
        <h1 className="text-2xl font-bold">🛍️ Product Dashboard</h1>
        <AppRoutes />
        <TotalSummary />
      </section>
    </ProductProvider>
  );
}
export default App;
