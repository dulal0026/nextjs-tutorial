
import ProductCatalog from "@/components/ProductCatalog";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-3 text-3xl font-bold">
        Our Products
      </h1>

      <p className="mb-8 text-gray-600">
        Explore our collection of quality products.
      </p>

      <ProductCatalog products={products} />
    </main>
  );
}
