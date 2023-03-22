import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart-details/cart.component';
import { HomeComponent } from './core/components/home/home.component';
import { OrderHistoryComponent } from './order-history/components/order-history/order-history.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
// import { CartComponent } from './cart/cart.component';
// import { HomeComponent } from './home/home.component';
// import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
   // loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  }
  //,
  // {
  //   path: 'cart',
  //   component: CartComponent,
  // },
  // {
  //   path: 'order-history',
  //   component: OrderHistoryComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
