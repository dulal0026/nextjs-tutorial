import "server-only"

import type { ShopProduct } from "@/types/shop-product"
import { error } from "console";

/*

const products: ShopProduct[] = [
    {
        id: 1,
        name: "Fresh Apples",
        category: "Fruits",
        price: 250,
        inStock: true,
    },
    {
        id: 2,
        name: "Bananas",
        category: "Fruits",
        price: 120,
        inStock: true,
    },
    {
        id: 3,
        name: "Miniket Rice",
        category: "Groceries",
        price: 850,
        inStock: true,
    },
    {
        id: 4,
        name: "Fresh Milk",
        category: "Dairy",
        price: 100,
        inStock: false,
    },
    {
        id: 5,
        name: "Soybean Oil",
        category: "Groceries",
        price: 190,
        inStock: true,
    },
];


export async function getShopProducts():Promise<ShopProduct[]> {
    return products
}
*/
interface ProductsResponse {
    success: boolean,
    data: ShopProduct[]
}

 export async function getShopProducts(): Promise<ShopProduct[]> {
    const baseUrl = process.env.API_BASE_URL

    if(!baseUrl) {
        throw new Error("API BASE URL is not configured")
    }

    const response = await fetch(`${baseUrl}/products`, {
        cache: "no-store"
    })

    if(!response.ok) {
        throw new Error(
            `Failed to fetch products: HTTP ${response.status}`
        )
    }

    const result: ProductsResponse = await response.json()

    if (!result.success || !Array.isArray(result.data)) {
        throw new Error("Invalid products API response")
    }

    return result.data
 }