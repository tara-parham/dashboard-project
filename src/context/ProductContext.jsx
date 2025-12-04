import { createContext, useEffect, useReducer } from "react";
import { products as initialProducts } from "../data/products";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  //function
  const init = () => {
    const saved = localStorage.getItem("products");
    if (saved) return JSON.parse(saved);
    return initialProducts.map((p) => ({ ...p, count: 0 }));
  };

  //usereducer
  const [products, dispatch] = useReducer(ProductReducer, [], init);

  //useEffect
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  //return
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
