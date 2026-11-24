
import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    description: "Fresh and delicious red apples.",
    price: 250,
    category: "Fruits",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Rice",
    description: "Premium quality organic rice.",
    price: 750,
    category: "Grocery",
    inStock: true,
  },
  {
    id: 3,
    name: "Fresh Milk",
    description: "Fresh dairy milk.",
    price: 120,
    category: "Dairy",
    inStock: false,
  },
  {
    id: 4,
    name: "Cooking Oil",
    description: "Refined cooking oil.",
    price: 850,
    category: "Grocery",
    inStock: true,
  },
];

