import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const cartroutes: Routes = [
  {
    path: '',
    component: OrderHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(cartroutes)],
  exports: [RouterModule],
})
export class OrderHistoryRoutingModule {}
