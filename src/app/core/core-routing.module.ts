import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { CartComponent } from './cart/components/cart-details/cart.component';
// import { OrderHistoryComponent } from './order-history/components/order-history/order-history.component';
// import { ProductListComponent } from './product/components/product-list/product-list.component';
// import { CartComponent } from './cart/cart.component';
// import { HomeComponent } from './home/home.component';
// import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('../order-history/order-history.module').then(
        (m) => m.OrderHistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
