import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { map, exhaustMap, catchError, of } from 'rxjs';
import { CartActionTypes } from './app.actions';
import { Cart } from './app.model';
import { GenerateId } from './app.utils';
import { ADD_ITEM_TO_CART, GET_CART, REMOVE_ITEM_FROM_CART } from './cart-ql/cart-ql.queries';

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
                    id: GenerateId(),
                },
            })
            .valueChanges
            .pipe(
                map(({ data, loading }) => {
                    // TODO: remove it
                    console.log('Effect');
                    console.log(data)
                    console.log(data.cart)
                    const cart = data.cart as Cart;
                    console.log(cart)
                    return ({ type: CartActionTypes.InitSuccess, payload: cart });
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
                    cartId: action.cartId,
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
                map(({ data }) => ({ type: CartActionTypes.AddSuccess, payload: data.cart })),
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
                    cartId: action.cartId,
                    id: action.id,
                },
            })
            .pipe(
                map(({ data }) => ({ type: CartActionTypes.DeleteSuccess, payload: data.cart })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Removed Error' })
            ))
        )
    ));
}