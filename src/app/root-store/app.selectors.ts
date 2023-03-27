import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, Cart } from './app.model';
 
export const selectCart = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCart,
  (cart: Cart) => {
    const test = cart as any;
    // TODO: smth completely wrong here
    return test.cart.items;
  }
);

export const selectCartTotalProductsNumber = createSelector(
  selectCart,
  (cart: Cart) => {
    const test = cart as any;
    // TODO: smth completely wrong here
    return test.cart.totalUniqueItems;
  }
);