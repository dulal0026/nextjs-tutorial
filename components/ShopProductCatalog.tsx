
"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { ShopProduct } from "@/types/shop-product";
import { useCart } from "@/context/CartContext";


interface ShopProductCatalogProps {
  initialProducts: ShopProduct[];
  initialSearch?: string
  initialCategory?: string
}

export default function ShopProductCatalog({
  initialProducts,
  initialSearch = "",
  initialCategory = "All"
}: ShopProductCatalogProps) {


  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? initialSearch;
  const category = searchParams.get("category") ?? initialCategory;

  const { addItem, cartCount } = useCart();

 // const [cart, setCart] = useState<Record<number, number>>({});

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
/*
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
*/
  function updateFilters(nextSearch: string, nextCategory: string) {
  const params = new URLSearchParams(searchParams.toString());

  if (nextSearch.trim()) {
    params.set("search", nextSearch.trim());
  } else {
    params.delete("search");
  }

  if (nextCategory !== "All") {
    params.set("category", nextCategory);
  } else {
    params.delete("category");
  }

  const query = params.toString();

  router.replace(query ? `${pathname}?${query}` : pathname, {
    scroll: false,
  });
}
  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(event) =>
             updateFilters(event.target.value, category)
            }
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 sm:flex-1"
        />

        <select
          value={category}
          onChange={(event) => updateFilters(search, event.target.value)}
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
               <Link
                href={`/shop/${product.id}`}
                className="hover:text-green-700 hover:underline"
              >
              {product.name}

              </Link>
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
              //onClick={() => addToCart(product.id)}
              onClick={ () => 
                addItem({
                  productId: product.id,
                  name: product.name,
                  price: product.price
                })

              }
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
