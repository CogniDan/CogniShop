import { createReducer, on } from '@ngrx/store';
import { initCartSuccess, addCartItemSuccess, deleteCartItemSuccess } from './app.actions';
import { AppState } from './app.model';

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
    on(addCartItemSuccess, (state, { cart }) => ({
        ...state,
        cart: { 
            ...cart,
            items: cart.items.map(p => ({
                ...p,
                id: +p.id
            }))
        }
    })),
    on(deleteCartItemSuccess, (state, { cart }) => ({
        ...state,
        cart: { 
            ...cart,
            items: cart.items.map(p => ({
                ...p,
                id: +p.id
            }))
        }
    })),
    on(initCartSuccess, (state, { cart }) => ({
        ...state,
        cart: { 
            ...cart,
            items: cart.items.map(p => ({
                ...p,
                id: +p.id
            }))
        }
    }))
);