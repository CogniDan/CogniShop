import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, Cart } from './app.model';
 
export const selectCart = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCart,
  (cart: Cart) => {
    const test = cart as any;
    // TODO: smth completely wrong here
    console.log(test)
    return test.cart.items;
  }
);