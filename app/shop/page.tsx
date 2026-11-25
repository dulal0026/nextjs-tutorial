import ShopProductCatalog from "@/components/ShopProductCatalog";
import { getShopProducts } from "@/lib/server/products";


export default async function ShopPage() {
    const products = await getShopProducts()

    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Shop Products
                </h1>
                <p className="mt-2 text-gray-600">
                    Browse fresh groceries and everyday essentials.

                </p>

            </div>
            <ShopProductCatalog initialProducts={products}/>
        </main>
    )
}