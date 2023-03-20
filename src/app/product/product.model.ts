export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    images?: string[],
    unitTotal?: any,
    lineTotal?: any,
    metadata?: string
}