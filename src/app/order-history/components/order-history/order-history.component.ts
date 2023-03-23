import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public orders$: Observable<Order[]>;

  constructor(private ordersServices: OrdersService) {
    this.orders$ = ordersServices.getOrders();
  }
}
