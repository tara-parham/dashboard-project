import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function MiniSummary() {
  //usecontext
  const { products } = useContext(ProductContext);

  //variables
  const totalCount = products.reduce((sum, p) => sum + Number(p.count), 0);
  const totalPrice = products.reduce(
    (sum, p) => sum + Number(p.count) * Number(p.price),
    0
  );
  const formattedPrice = totalPrice.toLocaleString();

  //return
  return (
    <section className="p-3 mt-4 border rounded-xl bg-blue-50 shadow-sm ">
      <h3 className="font-semibold mb-4">🧾 Summary</h3>
      <div className="text-sm text-gray-700">
        <p className="mb-2">Total Items: {totalCount}</p>
        <p className="mb-2">Total Price: {formattedPrice} €</p>
        <Link to="/total">
          <p className="text-blue-800 font-bold">View Total Summary</p>
        </Link>
      </div>
    </section>
  );
}
