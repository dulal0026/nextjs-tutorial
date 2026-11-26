
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { cartCount, isReady } = useCart();

  return (
    <Link
      href="/cart"
      className="rounded-lg bg-green-700 px-4 py-2 font-medium text-white"
    >
      Cart ({isReady ? cartCount : "..."})
    </Link>
  );
}
