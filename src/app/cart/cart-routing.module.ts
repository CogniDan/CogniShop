import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart-details/cart.component';

const cartroutes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(cartroutes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
