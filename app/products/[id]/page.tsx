


type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">
        Product Details
      </h1>

      <p className="mt-4 text-lg">
        Selected Product ID: {id}
      </p>
    </main>
  );
}
