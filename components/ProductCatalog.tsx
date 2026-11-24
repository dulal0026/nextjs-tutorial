"use client";
import CartTitleEffect from "./CartTitleEffect";

import type { Product } from "@/types/product";
import { useState } from "react";
import ProductGrid from "./ProductGrid";

interface ProductCatalogProps {
  products: Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const [cart, setCart] = useState<Record<number, number>>({});

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filterProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  function updateQuantity(id: number, quantity: number) {
    setQuantities((previous) => ({
      ...previous,
      [id]: Math.max(1, quantity),
    }));
  }

  function addToCart(id: number) {
    const product = products.find((p) => p.id === id);

    if (!product || !product.inStock) return;

    const quantity = quantities[id] ?? 1;

    setCart((previous) => ({
      ...previous,
      [id]: (previous[id] ?? 0) + quantity,
    }));
  }
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Products</h2>

        <div className="rounded-lg bg-green-100 px-4 py-2 font-semibold text-green-800">
          Cart: {cartCount} items
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 sm:flex-1"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 sm:w-56"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <ProductGrid
        products={filterProducts}
        quantities={quantities}
        onQuantityChange={updateQuantity}
        onAddToCart={addToCart}
      />
      <CartTitleEffect cartCount={cartCount} />
    </section>
  );
}
