
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    subtotal,
    isReady,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (!isReady) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <p>Loading cart...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="rounded-xl border p-8 text-center">
          <p className="text-gray-600">
            Your cart is empty.
          </p>

          <Link
            href="/shop"
            className="mt-4 inline-block text-green-700 underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>

                <p className="text-gray-600">
                  ৳{item.price}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.quantity - 1
                    )
                  }
                  disabled={item.quantity <= 1}
                  className="rounded border px-3 py-1 disabled:opacity-40"
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.quantity + 1
                    )
                  }
                  className="rounded border px-3 py-1"
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  className="ml-3 text-red-600"
                >
                  Remove
                </button>
              </div>

              <p className="font-semibold">
                ৳{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="rounded-xl bg-gray-100 p-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Subtotal</span>
              <span>৳{subtotal.toFixed(2)}</span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Delivery fees will be calculated at checkout.
            </p>

            <button
              type="button"
              onClick={clearCart}
              className="mt-6 rounded-lg border border-red-600 px-5 py-2 text-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
