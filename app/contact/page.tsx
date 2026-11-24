import Welcome from "@/components/Welcome";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-bold">Contact Us</h1>

      <p className="mt-4 text-gray-600">
        Have questions? Contact the Tree Shop team.
      </p>

      <p className="mt-4">Email: support@treeshop.example</p>
      <Welcome />
    </main>
  );
}
