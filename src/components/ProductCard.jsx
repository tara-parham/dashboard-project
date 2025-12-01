import { Link } from "react-router-dom";

function ProductCard({ id, name, price }) {
  return (
    <section className="p-4 border rounded-2xl shadow-md flex flex-col gap-3 bg-white">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-600">💰 {price} €</p>
      <div className="flex items-center gap-2">
        <Link to={`/product/${id}`}>
          <button className="px-2 py-1 bg-red-500 text-white rounded">
            View Details
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ProductCard;
