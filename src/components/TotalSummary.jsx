import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function TotalSummary() {
  //usecontext
  const { products } = useContext(ProductContext);

  //variables
  const validProducts = products.filter((p) => p.count > 0);
  const total = products.reduce(
    (sum, item) => sum + Number(item.count) * Number(item.price),
    0
  );

  //return
  return (
    <section className="grid justify-center">
      <table className="border-2 border-double text-center">
        <thead>
          <tr className="bg-blue-50">
            <th className="p-5 border-r-2">Product' Name</th>
            <th className="p-5 border-r-2">Product' ID</th>
            <th className="p-5 border-r-2">Price</th>
            <th className="p-5 border-r-2">Count</th>
            <th className="p-5">Total Sum</th>
          </tr>
        </thead>
        <tbody>
          {validProducts.map((p) => (
            <tr key={p.id} className="border-t-2 bg-blue-100">
              <td className="p-5 border-r-2">{p.name}</td>
              <td className="p-5 border-r-2">{p.id}</td>
              <td className="p-5 border-r-2">{p.price.toLocaleString()} €</td>
              <td className="p-5 border-r-2">{p.count}</td>
              <td className="p-5 border-r-2">
                {(p.count * p.price).toLocaleString()} €
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 p-4 bg-blue-50 rounded-xl shadow ">
        <p className="text-lg font-semibold">
          Total: {total.toLocaleString()} €
        </p>
      </div>
    </section>
  );
}
