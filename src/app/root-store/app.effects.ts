import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { map, exhaustMap, catchError, of, switchMap, mergeMap, tap } from 'rxjs';
import { CartActionTypes, initCartSuccess, addCartItemSuccess, deleteCartItemSuccess, checkoutCartSuccess, emptyCartSuccess, incrementCartItemQuantitySuccess, decrementCartItemQuantitySuccess } from './app.actions';
import { Cart } from './app.model';
import { GenerateId, GetCartId, GetOrGenerateId, SetCartId } from './app.utils';
import { ADD_ITEM_TO_CART, GET_CART, REMOVE_ITEM_FROM_CART, CHECKOUT_CART, EMPTY_CART, INCREMENT_ITEM, DECREMENT_ITEM } from '../cart/cart-ql/cart-ql.queries';
import { ProductDummyService } from '../product/services/product-dummy.service';
import { OrdersService } from '../order-history/services/orders.service';

@Injectable()
export class CartEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductDummyService,
        private orderService: OrdersService,
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
                catchError(() => of({ type: '[Cart API] Cart Loaded Error' }))
            )
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
                map(({ data }) => addCartItemSuccess({ cart: data.addItem })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Added Error' }))
            )
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
                map(({ data }) => deleteCartItemSuccess({ cart: data.removeItem })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart Removed Error' }))
            )
        )
    ));

    checkoutCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActionTypes.Checkout),
            exhaustMap((action: any) =>
                this.apollo
                    .mutate<any>({
                        mutation: CHECKOUT_CART,
                        variables: {
                            ...action.checkout,
                            cartId: GetCartId(),
                        },
                    })
                    .pipe(
                        tap(_ => this.orderService
                            .addOrder({
                                id: 'id',
                                userName: action.checkout.shipping.name,
                                items: action.checkout.products,
                                totalPrice: 2,
                                address: action.checkout.shipping.line1
                            })
                        ),
                        map(({ data }) => checkoutCartSuccess({ checkout: data.checkout })),
                        catchError(() => of({ type: '[Cart API] Cart Checkout Error' }))
                    )
            )
        )
    );

    emptyCartAfterCheckout$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.CheckoutSuccess),
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
                catchError(() => of({ type: '[Cart API] Cart Removed Error' }))
            )
        )
    ));

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
                catchError(() => of({ type: '[Cart API] Cart Removed Error' }))
            )
        )
    ));

    incrementItemQuantity$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.IncrementQuantity),
        exhaustMap((action: any) => this.apollo
            .mutate<any>({
                mutation: INCREMENT_ITEM,
                variables: {
                    cartId: GetCartId(),
                    id: action.product.id,
                    by: action.by
                },
            })
            .pipe(
                map(({ data }) => incrementCartItemQuantitySuccess({ cart: data.incrementItemQuantity })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart increment item Error' }))
            )
        )
    ));

    decrementItemQuantity$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.DecrementQuantity),
        exhaustMap((action: any) => this.apollo
            .mutate<any>({
                mutation: DECREMENT_ITEM,
                variables: {
                    cartId: GetCartId(),
                    id: action.product.id,
                    by: action.by
                },
            })
            .pipe(
                map(({ data }) => decrementCartItemQuantitySuccess({ cart: data.decrementItemQuantity })),
                // add exception handling
                catchError(() => of({ type: '[Cart API] Cart decrement item Error' }))
            )
        )
    ));
}