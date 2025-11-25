import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";
export default function ProductList() {
  const { products } = useContext(ProductContext);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
}
