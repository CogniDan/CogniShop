import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart-details/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { GraphQLModule } from './cart-ql/graphql.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [CartItemComponent, CartComponent, CheckoutComponent],
  imports: [
    CommonModule, 
    CartRoutingModule, 
    SharedModule, 
    GraphQLModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [GraphQLModule],
})
export class CartModule {}
