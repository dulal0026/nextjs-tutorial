import "server-only"

import type { ShopProduct } from "@/types/shop-product"

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