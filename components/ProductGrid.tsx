import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  quantities: Record<number, number>;
  onQuantityChange: (id: number, quantity: number) => void;
  onAddToCart: (id: number) => void;
}

export default function ProductGrid({
  products,
  quantities,
  onQuantityChange,
  onAddToCart,
}: ProductGridProps) {
  if (products.length === 0) {
    return <p className="text-gray-500">No products available.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] ?? 1}
          onQuantityChange={(quantity) =>
            onQuantityChange(product.id, quantity)
          }
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  );
}
