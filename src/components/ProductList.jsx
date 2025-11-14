import ProductCard from "./ProductCard";
export default function ProductList({ products, onCountChange }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} onCountChange={onCountChange} />
      ))}
    </section>
  );
}
