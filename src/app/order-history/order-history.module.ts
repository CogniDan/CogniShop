import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing.module';



@NgModule({
  declarations: [OrderHistoryComponent],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule
  ]
})
export class OrderHistoryModule { }
