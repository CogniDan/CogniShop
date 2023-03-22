import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { map, exhaustMap, catchError, of, mapTo, switchMap, mergeMap } from 'rxjs';
import { CartActionTypes, initCartSuccess, addCartItemSuccess, deleteCartItemSuccess, checkoutCartSuccess, emptyCartSuccess } from './app.actions';
import { Cart } from './app.model';
import { GenerateId, GetCartId, GetOrGenerateId, SetCartId } from './app.utils';
import { ADD_ITEM_TO_CART, GET_CART, REMOVE_ITEM_FROM_CART, CHECKOUT_CART, EMPTY_CART } from '../cart/cart-ql/cart-ql.queries';
import { ProductDummyService } from '../product/services/product-dummy.service';

@Injectable()
export class CartEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductDummyService,
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

    checkoutCart$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CartActionTypes.Checkout),
            exhaustMap((action: any) => 
                this.productService.setOrderedItems(action.checkout.products)
                    .pipe(
                        mergeMap((res) => this.apollo
                            .mutate<any>({
                                mutation: CHECKOUT_CART,
                                variables: {
                                    ...action.checkout,
                                    cartId: GetCartId(),
                                },
                            }),
                            (rest, graph) => checkoutCartSuccess({ checkout: graph.data.checkout })),
                            
                            catchError(() => of({ type: '[Cart API] Cart Checkout Error' })
                        )
                    )
            )
        )
    );

    emptyCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.Empty),
        exhaustMap((action: any) => this.apollo
            .mutate<any>({
                mutation: EMPTY_CART,
                variables: {
                    id: GetCartId(),
                },
            })
            .pipe(
                map(({ data }) => emptyCartSuccess()),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Removed Error' })
            ))
        )
    ));
}

function forkjoin(arg0: { graphQL: import("rxjs").Observable<import("apollo-angular").MutationResult<any>>; restAPI: any; }) {
    throw new Error('Function not implemented.');
}
