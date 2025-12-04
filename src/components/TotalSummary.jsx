import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import TalbeCell from "./Table/TableCell";
import TableHeader from "./Table/TableHeader";

export default function TotalSummary() {
  //usecontext
  const { products, dispatch } = useContext(ProductContext);

  //variables
  const validProducts = products.filter((p) => p.count > 0);
  const total = products.reduce(
    (sum, item) => sum + Number(item.count) * Number(item.price),
    0
  );
  const headers = [
    "Product's Name",
    "Product's ID",
    "Price",
    "Count",
    "Total Sum",
    "Actions",
  ];

  //function
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      dispatch({ type: "DELETE", id });
    }
  };

  //return
  return (
    <section className="grid justify-center">
      <table className="border-2 border-double text-center">
        <TableHeader headers={headers} />
        <tbody>
          {validProducts.map((p) => (
            <tr key={p.id} className="border-t-2 bg-blue-100">
              <TalbeCell>{p.name}</TalbeCell>
              <TalbeCell>{p.id}</TalbeCell>
              <TalbeCell>{p.price.toLocaleString()} €</TalbeCell>
              <TalbeCell>{p.count}</TalbeCell>
              <TalbeCell>{(p.count * p.price).toLocaleString()} €</TalbeCell>
              <TalbeCell>
                <button
                  className="px-2 py-1 bg-red-500 text-small text-white rounded cursor-pointer"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </TalbeCell>
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
