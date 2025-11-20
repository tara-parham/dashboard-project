import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import useProductCount from "../hooks/useProductCount";

export default function ProductCard({ id, name, price, stock }) {
  //custom hook
  const { count, increment, decrement } = useProductCount(id);
  //return
  return (
    <section className="p-4 border rounded-2xl shadow-md flex flex-col gap-3 bg-white">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-600">💰 {price} €</p>
      <p className="text-sm text-gray-500">Stock: {stock}</p>
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
    </section>
  );
}
