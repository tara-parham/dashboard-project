import "./App.css";
import ProductProvider from "./context/ProductContext";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ProductProvider>
      <section className="p-6 bg-gray-50 min-h-screen space-y-6">
        <Navbar />
        <AppRoutes />
      </section>
    </ProductProvider>
  );
}
export default App;
