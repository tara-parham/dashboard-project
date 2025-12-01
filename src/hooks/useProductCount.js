import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProductCount(id) {
  //context, variable
  const { products, dispatch } = useContext(ProductContext);
  const numericId = Number(id);
  const product = products.find((p) => p.id === numericId);

  //arrow functions
  const increment = () => {
    dispatch({ type: "INCREMENT", id: product.id });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", id: product.id });
  };
  //return
  return { count: product.count, increment, decrement };
}
