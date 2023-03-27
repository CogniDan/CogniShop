import { createReducer, on } from '@ngrx/store';
import { Product } from '../shared/models/product.model';
import { initCartSuccess, addCartItemSuccess, deleteCartItemSuccess, checkoutCartSuccess, emptyCartSuccess, incrementCartItemQuantitySuccess, decrementCartItemQuantitySuccess } from './app.actions';
import { AppState, Cart } from './app.model';

export const initialState: AppState = {
    cart: {
        id: "",
        isEmpty: true,
        abandoned: false,
        totalItems: 0,
        totalUniqueItems: 0,
        items: []
    },
    test: false
};

export const cartReducer = createReducer(
    initialState,
    on(addCartItemSuccess, (state, { cart }) => newState(state, cart)),
    on(deleteCartItemSuccess, (state, { cart }) => newState(state, cart)),
    on(initCartSuccess, (state, { cart }) => newState(state, cart)),
    on(emptyCartSuccess, (state) => emptyState(state)),
    on(incrementCartItemQuantitySuccess, (state, { cart }) => updateCartItemsState(state, cart)),
    on(decrementCartItemQuantitySuccess, (state, { cart }) => updateCartItemsState(state, cart)),
);

const newState = (state: AppState, newCart: any): AppState => {
    if (newCart?.items != null) {
        const cart = newCart as Cart;
        return {
            ...state,
            cart: { 
                ...cart,
                items: cart.items?.map(p => ({
                    ...p,
                    id: p.id
                }))
            }
        }
    } else {
        const cart = { ...newCart.cart } as Cart;
        return {
            ...state,
            cart: { 
                ...cart,
                items: cart.items?.map(p => ({
                    ...p,
                    id: p.id
                }))
            }
        }
    }
}

const emptyState = (state: AppState): AppState => {
    return {
        ...state,
        cart: { 
            ...state.cart,
            isEmpty: true,
            abandoned: false,
            totalItems: 0,
            totalUniqueItems: 0,
            items: []
        }
    }
}

const updateCartItemsState = (state: AppState, newCart: any): AppState => {
    return {
        ...state,
        cart: { 
            ...state.cart,
            items: [
                ...state.cart.items.map(item => ({
                    ...item,
                    quantity: newCart.items.find((u: Product) => u.id === item.id)?.quantity
                }))
            ]
        }
    }

}