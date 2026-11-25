
import Counter from "@/components/Counter";

export default function ServerDemoPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">
        Server and Client Components
      </h1>

      <p className="text-gray-600">
        This page is a Server Component.
      </p>

      <Counter initialCount={5} />
    </main>
  );
}
