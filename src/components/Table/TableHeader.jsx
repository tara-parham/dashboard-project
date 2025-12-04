export default function TableHeader({ headers }) {
  return (
    <thead>
      <tr className="border-t-2 bg-blue-50">
        {headers.map((header, index) => (
          <th key={index} className="p-5 border-r-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
