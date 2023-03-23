import { Product } from "./product.model";

export interface Order{
    id: string,
    totalPrice: number,
    userName: string,
    address: string,
    items: Product[]
}