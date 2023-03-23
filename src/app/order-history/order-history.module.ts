import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderHistoryComponent, OrderDetailComponent],
  imports: [CommonModule,SharedModule, OrderHistoryRoutingModule],
})
export class OrderHistoryModule {}
