import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Talbe from "./Table/Table";
import Table from "./Table/Table";
import TableRow from "./Table/TableRow";
import TalbeCell from "./Table/TableCell";

export default function TotalSummary() {
  //usecontext
  const { products } = useContext(ProductContext);

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
  ];

  //return
  return (
    <section className="grid justify-center">
      <Table headers={headers}>
        {validProducts.map((p) => (
          <TableRow key={p.id}>
            <TalbeCell>{p.name}</TalbeCell>
            <TalbeCell>{p.id}</TalbeCell>
            <TalbeCell>{p.price.toLocaleString()} €</TalbeCell>
            <TalbeCell>{p.count}</TalbeCell>
            <TalbeCell>{(p.count * p.price).toLocaleString()} €</TalbeCell>
          </TableRow>
        ))}
      </Table>
      <div className="mt-5 p-4 bg-blue-50 rounded-xl shadow ">
        <p className="text-lg font-semibold">
          Total: {total.toLocaleString()} €
        </p>
      </div>
    </section>
  );
}
