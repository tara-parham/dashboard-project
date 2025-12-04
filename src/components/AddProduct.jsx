import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function AddProduct() {
  //context
  const { products, dispatch } = useContext(ProductContext);

  //state
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  //function
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validate();
    setError(errorMessage);
    if (Object.keys(errorMessage).length > 0) return;
    //create new product
    const newProduct = {
      id: Math.floor(100000 + Math.random() * 900000),
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
      count: 0,
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    setForm({
      name: "",
      price: "",
      stock: "",
    });
    setSuccess(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const validate = () => {
    const newError = {};
    //validation
    if (!form.name.trim()) newError.name = "Name is required";
    if (Number(form.price) <= 0) newError.price = "Price must be positive";
    if (Number(form.stock) <= 0) newError.stock = "Stock must be positive";
    return newError;
  };

  //return
  return (
    <form
      className="flex flex-col gap-3 p-4 bg-white shadow rounded"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      {error.name && <p className="text-red-500">{error.name}</p>}
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
      />
      {error.price && <p className="text-red-500">{error.price}</p>}
      <input
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
      />
      {error.stock && <p className="text-red-500">{error.stock}</p>}
      <button type="submit">Add Product</button>
      {success && (
        <div className="text-center mt-8">
          <p className="text-green-500 font-bold text-lg mb-5">
            Product added successfully ✅
          </p>
          <Link
            to="/"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Continue
          </Link>
        </div>
      )}
    </form>
  );
}
