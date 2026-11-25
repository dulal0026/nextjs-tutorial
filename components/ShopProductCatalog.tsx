
"use client";

import { useMemo, useState } from "react";
import type { ShopProduct } from "@/types/shop-product";

interface ShopProductCatalogProps {
  initialProducts: ShopProduct[];
}

export default function ShopProductCatalog({
  initialProducts,
}: ShopProductCatalogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<Record<number, number>>({});

  const categories = useMemo(
    () => [
      "All",
      ...new Set(initialProducts.map((product) => product.category)),
    ],
    [initialProducts]
  );

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [initialProducts, search, category]);

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  function addToCart(productId: number) {
    setCart((previous) => ({
      ...previous,
      [productId]: (previous[productId] ?? 0) + 1,
    }));
  }

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 sm:flex-1"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 sm:w-52"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-6 font-medium text-gray-700">
        Cart: {cartCount} item(s)
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-green-700">
              {product.category}
            </p>

            <h2 className="mt-2 text-xl font-bold text-gray-900">
              {product.name}
            </h2>

            <p className="mt-3 text-lg font-semibold text-gray-900">
              ৳{product.price}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>

            <button
              type="button"
              disabled={!product.inStock}
              onClick={() => addToCart(product.id)}
              className="mt-5 w-full rounded-lg bg-green-700 px-4 py-3 font-medium text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-gray-600">
          No matching products found.
        </p>
      )}
    </section>
  );
}
