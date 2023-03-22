import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { map, exhaustMap, catchError, of } from 'rxjs';
import { CartActionTypes, initCartSuccess, addCartItemSuccess, deleteCartItemSuccess, checkoutCartSuccess } from './app.actions';
import { Cart } from './app.model';
import { GenerateId, GetCartId, GetOrGenerateId, SetCartId } from './app.utils';
import { ADD_ITEM_TO_CART, CHECKOUT_CART, GET_CART, REMOVE_ITEM_FROM_CART } from './cart-ql/cart-ql.queries';

@Injectable()
export class CartEffects {

    constructor(
        private actions$: Actions,
        private apollo: Apollo) { }

    initCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.Init),
        exhaustMap(() => this.apollo
            .watchQuery<any>({
                query: GET_CART,
                variables: {
                    // TODO: use local storage to fetch already excisted carts
                    id: GetOrGenerateId(),
                },
            })
            .valueChanges
            .pipe(
                map(({ data, loading }) => {
                    SetCartId(data.cart.id);
                    return initCartSuccess({ cart: data.cart })
                }),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Loaded Error' })
            ))
        )
    ));

    addItemToCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.Add),
        exhaustMap((action: any) => this.apollo
            .mutate<any>({
                mutation: ADD_ITEM_TO_CART,
                variables: {
                    cartId: GetCartId(),
                    id: action.product.id,
                    name: action.product.name,
                    description: action.product.description,
                    images: action.product.images,
                    price: action.product.price,
                    quantity: action.product.quantity,
                    metadata: action.product.metadata
                },
            })
            .pipe(
                map(({ data }) => addCartItemSuccess({ cart: data.cart })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Added Error' })
            ))
        )
    ));

    deleteItemToCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.Delete),
        exhaustMap((action: any) => this.apollo
            .mutate<any>({
                mutation: REMOVE_ITEM_FROM_CART,
                variables: {
                    cartId: GetCartId(),
                    id: action.id,
                },
            })
            .pipe(
                map(({ data }) => deleteCartItemSuccess({ cart: data.cart })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Removed Error' })
            ))
        )
    ));

    checkoutCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.Checkout),
        exhaustMap((action: any) => this.apollo
            .mutate<any>({
                mutation: CHECKOUT_CART,
                variables: {
                    cartId: GetCartId(),
                    id: action.id,
                },
            })
            .pipe(
                map(({ data }) => checkoutCartSuccess({ checkout: data.checkout })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Removed Error' })
            ))
        )
    ));
}