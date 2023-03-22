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

export interface Address {
    company?: string,
    name: string,
    line1: string,
    city: string,
    state?: string,
    postalCode: string,
    country: string
}

export interface Checkout {
    email: string,
    notes: String,
    shipping: Address,
    billing: Address,
    products?: Product[]
}