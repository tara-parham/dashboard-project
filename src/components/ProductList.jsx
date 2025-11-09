import ProductCard from "./ProductCard";
export default function ProductList({ products }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          stock={item.stock}
        />
      ))}
    </section>
  );
}
