import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OrderHistoryComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    SharedModule
  ]
})
export class OrderHistoryModule { }
