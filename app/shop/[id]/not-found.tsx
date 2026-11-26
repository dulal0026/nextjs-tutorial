
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        Product Not Found
      </h1>

      <p className="mt-4 text-gray-600">
        This product may have been removed or is unavailable.
      </p>

      <Link
        href="/shop"
        className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 text-white"
      >
        Browse Products
      </Link>
    </main>
  );
}
