export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    images?: string[],
    unitTotal?: any,
    lineTotal?: any,
    metadata?: string
}