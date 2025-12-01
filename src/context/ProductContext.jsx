import { createContext, useReducer } from "react";
import { products as initialProducts } from "../data/products";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(
    ProductReducer,
    initialProducts.map((p) => ({ ...p, count: 0 }))
  );
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
