
"use client";

import { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

export default function Counter({
  initialCount = 0,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Client Component Counter
      </h2>

      <p className="mb-4 text-3xl font-bold text-green-700">
        {count}
      </p>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setCount((previous) => previous - 1)}
          className="rounded-lg bg-gray-200 px-5 py-2 text-gray-900"
        >
          Decrease
        </button>

        <button
          type="button"
          onClick={() => setCount((previous) => previous + 1)}
          className="rounded-lg bg-green-700 px-5 py-2 text-white"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
