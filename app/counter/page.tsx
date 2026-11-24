"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>count: {count}</p>

        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div className="flex items-center justify-between rounded border px-6 py-4 bg-red-600">
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
      </div>

      <div className="flex flex-col gap-4 rounded border bg-yellow-300">
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
      </div>

      <div className="flex flex-col gap-4 rounded border bg-yellow-300">
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
        <h1 className="rounded border px-3 py-1 bg-green-100 text-black">
          Tree Shop
        </h1>
      </div>
    </div>
  );
}
