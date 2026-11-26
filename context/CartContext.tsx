
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";

import {
  cartReducer,
  initialCartState,
} from "@/lib/cartReducer";

import type { CartItem } from "@/types/cart";

interface AddCartItem {
  productId: number;
  name: string;
  price: number;
}

interface CartContextValue {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  isReady: boolean;
  addItem: (product: AddCartItem) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "tree-shop-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState
  );

  const [isReady, setIsReady] = useState(false);

  // Restore saved cart on the client.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed: unknown = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          const items: CartItem[] = parsed.filter(
            (item): item is CartItem =>
              typeof item === "object" &&
              item !== null &&
              Number.isSafeInteger(item.productId) &&
              item.productId > 0 &&
              typeof item.name === "string" &&
              typeof item.price === "number" &&
              Number.isFinite(item.price) &&
              item.price >= 0 &&
              Number.isSafeInteger(item.quantity) &&
              item.quantity > 0
          );

          dispatch({
            type: "HYDRATE_CART",
            payload: items,
          });
        }
      }
    } catch (error) {
      console.error("Unable to restore cart:", error);
    }

    setIsReady(true);
  }, []);

  // Save changes after hydration is complete.
  useEffect(() => {
    if (!isReady) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state.items)
    );
  }, [state.items, isReady]);

  const cartCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function addItem(product: AddCartItem) {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  }

  function updateQuantity(productId: number, quantity: number) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity },
    });
  }

  function removeItem(productId: number) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { productId },
    });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        cartCount,
        subtotal,
        isReady,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
