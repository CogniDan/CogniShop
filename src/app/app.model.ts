import { Product } from "./product/product.model"

export interface AppState {
    cart: Cart,
    test: boolean
}

export interface Cart {
    id: string,
    isEmpty: boolean,
    abandoned: boolean,
    totalItems: number,
    totalUniqueItems: number,
    items: Product[]
}