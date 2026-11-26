import ShopProductCatalog from "@/components/ShopProductCatalog";
import { getShopProducts } from "@/lib/server/products";


interface ShopPageProps {
    searchParams: Promise <
    {
        search?: string | string[]
        category?: string | string[]
    }>
}

export default async function ShopPage(
    {
        searchParams
    }: ShopPageProps
) {

    const query = await searchParams

    const search = typeof query.search === "string" ? query.search : ""
    const category = typeof query.category === "string" ? query.category : "All"
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
            <ShopProductCatalog initialProducts={products}
            initialSearch={search}
            initialCategory={category}/>
        </main>
    )
}