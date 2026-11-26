import type { CartAction, CartState } from "@/types/cart";

export const initialCartState: CartState = {
    items: []
}

export function cartReducer(
    state: CartState,
    action: CartAction
): CartState {

    switch (action.type) {
        case "ADD_ITEM": {

            const existingItem = state.items.find(
                (item) => item.productId === action.payload.productId
            )

            if (existingItem) {
                return {
                    ...state,
                    items: state.itemsl.map(
                        (item) => item.productId === action.payload.productId ? { ...item, quantity: item.quantity + 1} : item
                    )

                }
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }


        }
        case "UPDATE_QUANTITY" : {
            return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };

        }
        case "REMOVE_ITEM": {
            return  {
                ...state,
                items: state.items.filter(
                    (item) => item.productId !== action.payload.productId
                )
            }
           
        }
        case "CLEAR_CART": {
            return initialCartState

        }
        case "HYDRATE_CART": {
            return {
                items: action.payload
            }

        }
        default:
             return state
    }
}