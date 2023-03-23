import { Action, createAction, props } from '@ngrx/store';
import { Product, Checkout } from '../shared/models/product.model';
import { Cart } from './app.model';

export enum CartActionTypes {
    Init = '[Cart Component] Init',
    InitSuccess = '[Cart API] Cart Loaded Success',

    Add = '[Cart Component] Add',
    AddSuccess = '[Cart API] Add Success',

    Delete = '[Cart Component] Delete',
    DeleteSuccess = '[Cart API] Delete Success',

    Checkout = '[Cart Component] Checkout',
    CheckoutSuccess = '[Cart API] Checkout Success',

    Empty = '[Cart Component] Empty',
    EmptySuccess = '[Cart API] Empty Success',

    IncrementQuantity = '[Cart Component] Increment Quantity',
    IncrementQuantitySuccess = '[Cart Component] Increment Quantity Success',

    DecrementQuantity = '[Cart Component] Decrement Quantity',
    DecrementQuantitySuccess = '[Cart Component] Decrement Quantity Success',
}

export const initCart = createAction(CartActionTypes.Init);
export const initCartSuccess = createAction(CartActionTypes.InitSuccess, props<{ cart: Cart }>());

export const addCartItem = createAction(CartActionTypes.Add, props<{ product: Product }>());
export const addCartItemSuccess = createAction(CartActionTypes.AddSuccess, props<{ cart: Cart }>());

export const deleteCartItem = createAction(CartActionTypes.Delete, props<{ id: number }>());
export const deleteCartItemSuccess = createAction(CartActionTypes.DeleteSuccess, props<{ cart: Cart }>());

export const checkoutCart = createAction(CartActionTypes.Checkout, props<{ checkout: Checkout }>());
export const checkoutCartSuccess = createAction(CartActionTypes.CheckoutSuccess, props<{ checkout: Checkout }>());

export const emptyCart = createAction(CartActionTypes.Empty);
export const emptyCartSuccess = createAction(CartActionTypes.EmptySuccess);

export const incrementCartItemQuantity = createAction(CartActionTypes.IncrementQuantity, props<{ product: Product, by: number }>());
export const incrementCartItemQuantitySuccess = createAction(CartActionTypes.IncrementQuantitySuccess, props<{ cart: Cart }>());

export const decrementCartItemQuantity = createAction(CartActionTypes.DecrementQuantity, props<{ product: Product, by: number }>());
export const decrementCartItemQuantitySuccess = createAction(CartActionTypes.DecrementQuantitySuccess, props<{ cart: Cart }>());

// TODO: add error handlers priority 0