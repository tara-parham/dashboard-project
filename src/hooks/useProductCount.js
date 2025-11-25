import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProductCount(id) {
  //context, variable
  const { products, setProducts } = useContext(ProductContext);
  const numericId = Number(id);
  const product = products.find((p) => p.id === numericId);

  //arrow functions
  const increment = () => {
    if (product.stock > product.count) {
      setProducts((prev) =>
        prev.map((p) => (p.id === numericId ? { ...p, count: p.count + 1 } : p))
      );
    }
  };
  const decrement = () => {
    if (product.count > 0) {
      setProducts((prev) =>
        prev.map((p) => (p.id === numericId ? { ...p, count: p.count - 1 } : p))
      );
    }
  };
  //return
  return { count: product.count, increment, decrement };
}
