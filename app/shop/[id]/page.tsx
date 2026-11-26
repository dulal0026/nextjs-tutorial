import Link from "next/link";
import { notFound } from "next/navigation";
import { getShopProductById } from "@/lib/server/products";


interface ProductDetailsPageProps  {
    params: Promise<{
        id: string
    }>
}

export default async function ProductDetailsPage(
    { params }: ProductDetailsPageProps
) {

    const {id} = await params

    const productId = Number(id)

    if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(productId)) {
    notFound();
  }

  const product = await getShopProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
        <Link 
        href = "/shop"
        className="text-sm font-medium text-green-700 hover:underline">
        ← Back to Products
        </Link>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8">
            
        <p className="text-sm font-medium text-green-700">
                {product.category}
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900">
            {product.name}
        </h1>

        <p className="mt-6 text-3xl font-semibold text-gray-900">
            ৳{product.price}
        </p>
         <p className="mt-4 text-gray-600">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        </div>

    </main>
  )
}