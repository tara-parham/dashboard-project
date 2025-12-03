import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import useProductCount from "../hooks/useProductCount";
import TotalSummary from "./TotalSummary";

export default function ProductDetail() {
  //useParams
  const { id } = useParams();
  //useContext
  const { products } = useContext(ProductContext);
  //custom hook
  const { count, decrement, increment } = useProductCount(id);
  //variable
  const product = products.find((p) => p.id === Number(id));
  //condition
  if (!product)
    return <h2 className="text-red-600 font-bold">Product not found</h2>;
  //return
  return (
    <section className="p-4 border rounded-2xl shadow-md flex flex-col gap-3 bg-white">
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-gray-600">💰 Price: {product.price} €</p>
      <p className="text-sm text-gray-500">📦 Stock: {product.stock}</p>
      <p className="text-sm text-gray-500">🆔 Procut ID: {product.id}</p>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="w-8 text-center">{count}</span>
        <button
          onClick={increment}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          +
        </button>
      </div>
      <TotalSummary />
    </section>
  );
}
