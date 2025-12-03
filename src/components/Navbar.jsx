import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow rounded">
      <Link to="/">
        <h1 className="text-2xl font-bold">🛍️ Product Dashboard</h1>
      </Link>
      <div className="flex gap-6">
        <Link to="/add">➕ Add Product</Link>
        <Link to="/total">🛒 Total Summary</Link>
      </div>
    </nav>
  );
}
