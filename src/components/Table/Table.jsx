export default function Table({ headers, children }) {
  return (
    <table className="border-2 border-double text-center">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="p-5 border-r-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
