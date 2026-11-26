export interface CartItem {
    productId: number
    name: string
    price: number
    quantity: number
}


export interface CartState {
    items: CartItem[]
}


export type CartAction = 
| {
    type: "ADD_ITEM"
    payload: Omit<CartItem, "quantity">
}
| {
    type: "UPDATE_QUANTITY"
    payload: {
        productId: number
        quantity: number
    }
}
| {
    type: "REMOVE_ITEM"
    payload: {
        productId: number
    }
}
| {
    type: "CLEAR_CART"
}
|{
    type: "HYDRATE_CART"
    payload: CartItem[]
}