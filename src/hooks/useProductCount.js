import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProductCount(id) {
  //context + variables
  const { products, setProducts } = useContext(ProductContext);
  const product = products.find((p) => p.id === id);
  //arrow functions
  const increment = () => {
    if (product.stock > product.count) {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
      );
    }
  };
  const decrement = () => {
    if (product.count > 0) {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
      );
    }
  };
  //return
  return { count: product.count, increment, decrement };
}
