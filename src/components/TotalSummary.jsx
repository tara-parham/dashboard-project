import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function TotalSummary() {
  //context
  const { products } = useContext(ProductContext);
  const total = products.reduce(
    (sum, item) => sum + item.count * item.price,
    0
  );
  return (
    <section className="p-4 bg-white rounded-xl shadow text-left">
      <p className="text-lg font-semibold">Total: {total}</p>
    </section>
  );
}
