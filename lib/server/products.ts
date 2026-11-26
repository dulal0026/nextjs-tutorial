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
interface ApiResponse<T> {
    success: boolean,
    data: T
}

function getApiBaseUrl(): string {
  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API_BASE_URL is not configured");
  }

  return baseUrl;
}

 export async function getShopProducts(): Promise<ShopProduct[]> {

    const response = await fetch(`${getApiBaseUrl()}/products`, {
        cache: "no-store"
    })

    if(!response.ok) {
        throw new Error(
            `Failed to fetch products: HTTP ${response.status}`
        )
    }

    const result: ApiResponse<ShopProduct[]> = await response.json()

    if (!result.success || !Array.isArray(result.data)) {
        throw new Error("Invalid products API response")
    }

    return result.data
 }

 export async function getShopProductById(
    id: number
 ): Promise<ShopProduct | null> {

    const response = await fetch(
        `${getApiBaseUrl()}/products/${id}`, {
            cache: "no-store"
        }
    )

    if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  const result: ApiResponse<ShopProduct> = await response.json()

  return result.data
 }