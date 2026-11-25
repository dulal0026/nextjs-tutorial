
"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-red-600">
        Unable to load products
      </h1>

      <p className="mt-4 text-gray-600">
        Please check your connection and try again.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-green-700 px-6 py-3 text-white"
      >
        Try Again
      </button>
    </main>
  );
}
