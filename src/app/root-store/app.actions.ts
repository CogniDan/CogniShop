import { Action, createAction, props } from '@ngrx/store';
import { Cart } from './app.model';
import { Product } from '../shared/models/product.model';

export enum CartActionTypes {
    Init = '[Cart Component] Init',
    InitSuccess = '[Cart API] Cart Loaded Success',

    Add = '[Cart Component] Add',
    AddSuccess = '[Cart Component] Add Success',

    Delete = '[Cart Component] Delete',
    DeleteSuccess = '[Cart Component] Delete Success',

    Checkout = '[Cart Component] Checkout',
    Empty = '[Cart Component] Empty',
    UpdateQuantity = '[Cart Component] Update Quantity',
}

export const initCart = createAction(CartActionTypes.Init);
export const initCartSuccess = createAction(CartActionTypes.InitSuccess, props<{ cart: Cart }>());

export const addCartItem = createAction(CartActionTypes.Add, props<{ product: Product }>());
export const addCartItemSuccess = createAction(CartActionTypes.AddSuccess, props<{ cart: Cart }>());

export const deleteCartItem = createAction(CartActionTypes.Delete, props<{ id: number }>());
export const deleteCartItemSuccess = createAction(CartActionTypes.DeleteSuccess, props<{ cart: Cart }>());

// TODO: implement rest actions/effects priority 1
export const checkoutCart = createAction(CartActionTypes.Checkout);
export const emptyCart = createAction(CartActionTypes.Empty);
export const updateCartItemQuantity = createAction(CartActionTypes.UpdateQuantity, props<{ product: Product }>());

// TODO: add error handlers priority 0