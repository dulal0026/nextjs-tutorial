"use client";

import type { Product } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export default function ProductCard({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
}: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex aspect-[4/3] items-center justify-center bg-green-50">
        <span className="text-5xl" aria-hidden="true">
          🛒
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-sm font-medium text-green-700">
          {product.category}
        </span>

        <h2 className="mt-2 text-xl font-bold text-gray-900">{product.name}</h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <p className="mt-4 text-2xl font-bold text-green-700">
          ৳{product.price.toLocaleString("en-BD")}
        </p>

        <span
          className={`mt-2 text-sm ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "● In Stock" : "● Out of Stock"}
        </span>

        <div className="mt-auto pt-5">
          <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-100 p-2">
            <button
              type="button"
              disabled={!product.inStock || quantity <= 1}
              onClick={() => onQuantityChange(quantity - 1)}
              aria-label={`Decrease ${product.name} quantity`}
              className="rounded-md bg-white px-4 py-2 disabled:opacity-40"
            >
              −
            </button>

            <span className="font-semibold">{quantity}</span>

            <button
              type="button"
              disabled={!product.inStock}
              onClick={() => onQuantityChange(quantity + 1)}
              aria-label={`Increase ${product.name} quantity`}
              className="rounded-md bg-white px-4 py-2 disabled:opacity-40"
            >
              +
            </button>
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            onClick={onAddToCart}
            className="w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Add to Cart
          </button>

          <Link
            href={`/products/${product.id}`}
            className="mt-4 block text-center text-sm font-medium text-green-700 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
