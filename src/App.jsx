import "./App.css";
import ProductList from "./components/ProductList";
import TotalSummary from "./components/TotalSummary";
import ProductProvider from "./context/ProductContext";

function App() {
  //function
  // function handleCountChange(id, newCount) {
  //   setProductsWithCount(
  //     productsWithCount.map((item) =>
  //       item.id === id ? { ...item, count: newCount } : item
  //     )
  //   );
  // }

  return (
    <ProductProvider>
      <section className="p-6 bg-gray-50 min-h-screen space-y-6">
        <h1 className="text-2xl font-bold">🛍️ Product Dashboard</h1>
        <ProductList />
        <TotalSummary />
      </section>
    </ProductProvider>
  );
}
export default App;
