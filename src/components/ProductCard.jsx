import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ProductCard({ id, name, price }) {
  //useContext
  const { dispatch } = useContext(ProductContext);

  //function
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this product?")) {
      dispatch({ type: "DELETE", id });
    }
  };

  //return
  return (
    <section className="p-4 border rounded-2xl shadow-md flex flex-col gap-3 bg-white">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-600">💰 {price.toLocaleString()} €</p>
      <div className="flex justify-between">
        <Link to={`/product/${id}`}>
          <button className="px-2 py-1 bg-gray-200 text-small rounded cursor-pointer">
            View Details
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="px-2 py-1 bg-red-500 text-small text-white rounded cursor-pointer"
        >
          Delete
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
