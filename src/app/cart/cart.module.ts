import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart-details/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { GraphQLModule } from './cart-ql/graphql.module';

@NgModule({
  declarations: [CartItemComponent, CartComponent],
  imports: [CommonModule, CartRoutingModule, GraphQLModule],
  exports: [GraphQLModule],
})
export class CartModule {}
