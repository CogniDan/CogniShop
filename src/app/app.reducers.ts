import { createReducer, on } from '@ngrx/store';
import { initCartSuccess, addCartItemSuccess, deleteCartItemSuccess, checkoutCartSuccess } from './app.actions';
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
    on(checkoutCartSuccess, (state, { checkout }) => emptyState(state))
);

const newState = (state: AppState, newCart: any): AppState => {
    console.log(newCart)
    if (newCart.items !== undefined) {
        const cart = newCart as Cart;
        return {
            ...state,
            cart: { 
                ...cart,
                items: cart.items?.map(p => ({
                    ...p,
                    id: +p.id
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
                    id: +p.id
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