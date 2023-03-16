import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Cart } from './app.model';
 
export const selectCart = createFeatureSelector<Cart>('cart');

export const selectCartProducts = createSelector(
    selectCart,
    (cart) => cart.items
  );