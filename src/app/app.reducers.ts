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
    }
};

export const cartReducer = createReducer(
    initialState,
    on(addCartItemSuccess, (state, { cart }) => ({
        ...state,
        cart: { 
            ...cart
        }
    })),
    on(deleteCartItemSuccess, (state, { cart }) => ({
        ...state,
        cart: { 
            ...cart
        }
    })),
    on(initCartSuccess, (state, { cart }) => {
        // TODO: remove it
        console.log('Reducer');
        console.log(cart);
        return ({
        ...state,
        cart: { 
            ...cart
        }
    })
})
);